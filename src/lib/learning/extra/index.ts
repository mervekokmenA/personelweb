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
import { lirvianModule } from "./lirvian";
import { elementlerKisaModule } from "./elementler-kisa";
import { ayBuyusuModule } from "./ay-buyusu";
import { ceyhanModule } from "./ceyhan-ezoterik-astroloji";
import { frawleyModule } from "./frawley-vedik";
import { turkceAstrolojiModule } from "./turkce-astroloji-kitaplari";
import { cucenModule } from "./cucen-metafizik";
import { dovmeModule } from "./dovme-semboller";
import { platonModule } from "./platon-epub";
import { hermeticaModule, tarotTarihiModule, cakraTarihiModule, kybalionModule, helenistikAstrolojiModule } from "./konu-modulleri";

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
  lirvianModule,
  elementlerKisaModule,
  ayBuyusuModule,
  ceyhanModule,
  frawleyModule,
  turkceAstrolojiModule,
  cucenModule,
  dovmeModule,
  platonModule,
  hermeticaModule,
  tarotTarihiModule,
  cakraTarihiModule,
  kybalionModule,
  helenistikAstrolojiModule,
];
