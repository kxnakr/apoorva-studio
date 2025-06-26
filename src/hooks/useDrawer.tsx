"use client";

import { create } from "zustand";
import { IProject } from "@/types/project";

interface DrawerStore {
  isOpen: boolean;
  projectData: IProject | null;
  openDrawer: (data: IProject) => void;
  closeDrawer: () => void;
}

export const useDrawer = create<DrawerStore>((set) => ({
  isOpen: false,
  projectData: null,
  openDrawer: (data: IProject) => set({ isOpen: true, projectData: data }),
  closeDrawer: () => set({ isOpen: false, projectData: null }),
}));
