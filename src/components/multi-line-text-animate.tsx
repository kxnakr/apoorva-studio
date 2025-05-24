"use client";

import { cn } from "@/lib/utils";
import { motion, Variants } from "motion/react";
import { ReactNode, ReactElement, memo } from "react";

interface MultiLineTextAnimateProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  once?: boolean;
  onComplete?: () => void;
}

interface CharacterData {
  char: string;
  className?: string;
  style?: React.CSSProperties;
  isSpace: boolean;
  lineIndex: number;
  isLineEnd: boolean;
  elementType?: string;
}

const blurInUpVariants: Variants = {
  hidden: {
    opacity: 0,
    filter: "blur(10px)",
    y: 20,
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: {
      y: { duration: 0.3 },
      opacity: { duration: 0.4 },
      filter: { duration: 0.3 },
    },
  },
};

const containerVariants: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0,
    },
  },
};

function extractCharacters(children: ReactNode): CharacterData[] {
  const characters: CharacterData[] = [];
  let lineIndex = 0;

  const processNode = (
    node: ReactNode,
    inheritedProps: {
      className?: string;
      style?: React.CSSProperties;
      elementType?: string;
    } = {}
  ): void => {
    if (typeof node === "string") {
      // Process each character in the string
      for (let i = 0; i < node.length; i++) {
        const char = node[i];
        characters.push({
          char,
          className: inheritedProps.className,
          style: inheritedProps.style,
          isSpace: char === " ",
          lineIndex,
          isLineEnd: false,
          elementType: inheritedProps.elementType,
        });
      }
    } else if (typeof node === "number") {
      const str = node.toString();
      for (let i = 0; i < str.length; i++) {
        const char = str[i];
        characters.push({
          char,
          className: inheritedProps.className,
          style: inheritedProps.style,
          isSpace: false,
          lineIndex,
          isLineEnd: false,
          elementType: inheritedProps.elementType,
        });
      }
    } else if (node && typeof node === "object" && "type" in node) {
      const element = node as ReactElement;
      const elementProps =
        (element.props as {
          className?: string;
          style?: React.CSSProperties;
          children?: ReactNode;
        }) || {};

      // Determine if this is an italic element
      const isItalic = element.type === "i" || element.type === "em";

      // Merge inherited props with current element props
      const mergedProps = {
        className: cn(inheritedProps.className, elementProps.className),
        style: {
          ...inheritedProps.style,
          ...elementProps.style,
          // Add italic styling if this is an italic element
          ...(isItalic ? { fontStyle: "italic" } : {}),
        },
        elementType: element.type as string,
      };

      // Process children with merged props
      if (elementProps.children) {
        if (Array.isArray(elementProps.children)) {
          elementProps.children.forEach((child: ReactNode) => {
            processNode(child, mergedProps);
          });
        } else {
          processNode(elementProps.children, mergedProps);
        }
      }
    } else if (Array.isArray(node)) {
      node.forEach((child) => processNode(child, inheritedProps));
    }
  };

  if (Array.isArray(children)) {
    children.forEach((child, index) => {
      processNode(child);
      // Mark the last character of each line (except the last line)
      if (index < children.length - 1 && characters.length > 0) {
        characters[characters.length - 1].isLineEnd = true;
        lineIndex++;
      }
    });
  } else {
    processNode(children);
  }

  return characters;
}

const MultiLineTextAnimateBase = ({
  children,
  className,
  delay = 0,
  staggerDelay = 0.03,
  once = true,
  onComplete,
}: MultiLineTextAnimateProps) => {
  const characters = extractCharacters(children);

  const customContainerVariants: Variants = {
    ...containerVariants,
    visible: {
      ...containerVariants.visible,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  };

  return (
    <motion.div
      variants={customContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      className={cn("flex flex-col", className)}
      onAnimationComplete={onComplete}
    >
      {/* Group characters by line */}
      {Array.from(new Set(characters.map((c) => c.lineIndex))).map(
        (lineIdx) => (
          <div key={`line-${lineIdx}`} className="flex flex-wrap">
            {characters
              .filter((c) => c.lineIndex === lineIdx)
              .map((charData, index) => (
                <motion.span
                  key={`char-${lineIdx}-${index}`}
                  variants={blurInUpVariants}
                  className={cn(
                    "inline-block",
                    charData.isSpace ? "whitespace-pre" : "",
                    charData.className
                  )}
                  style={charData.style}
                >
                  {charData.char}
                </motion.span>
              ))}
          </div>
        )
      )}
    </motion.div>
  );
};

export const MultiLineTextAnimate = memo(MultiLineTextAnimateBase);
