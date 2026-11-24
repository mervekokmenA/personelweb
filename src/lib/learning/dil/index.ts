import type { LearningModule } from "../types";
import { enModule } from "./en";
import { rusModule } from "./ru";
import { heModule } from "./he";

/** Yabancı dil modülleri: alfabe, okunuş, gramer ve kelime çalışma dersleri (kartlar /dil altında) */
export const DIL_MODULES: LearningModule[] = [enModule, rusModule, heModule];
