import type { LearningModule } from "../types";
import { goetiaModule } from "./goetia";
import { m777Module } from "./yedi-yuz-yetmis-yedi";
import { arsVercanusModule } from "./ars-vercanus";
import { basickMagickModule } from "./basick-magick";
import { planetaryMagickModule } from "./planetary-magick";
import { kabbalahUnveiledModule } from "./kabbalah-unveiled";
import { pratikOkultizmModule } from "./pratik-okultizm";
import { leviModule } from "./levi";
import { auraModule } from "./aura";
import { eterikCiftModule } from "./eterik-cift";
import { bedenEnerjiModule } from "./beden-enerji";
import { plotinosModule } from "./plotinos";
import { cockrenModule } from "./cockren-simya";
import { alchemyHanswilleModule } from "./alchemy-entschleierte";
import { elementBuyuculuguModule } from "./element-buyuculugu";
import { crowleyModule } from "./crowley-turkce";
import { dortElementModule } from "./dort-element-homeopati";
import { butlerMagicianModule } from "./butler-magician";

/** Ek modüller: yüklenen her kitap/kaynak için bir iç modül ve internetten bulunan eksik konular. */
export const EXTRA_MODULES: LearningModule[] = [
  goetiaModule,
  m777Module,
  arsVercanusModule,
  basickMagickModule,
  planetaryMagickModule,
  kabbalahUnveiledModule,
  pratikOkultizmModule,
  leviModule,
  auraModule,
  eterikCiftModule,
  bedenEnerjiModule,
  plotinosModule,
  cockrenModule,
  alchemyHanswilleModule,
  elementBuyuculuguModule,
  crowleyModule,
  dortElementModule,
  butlerMagicianModule,
];
