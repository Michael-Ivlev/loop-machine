import _tambourine_shake_higher from "../sounds/_tambourine_shake_higher.mp3";
import BVOC from "../sounds/B VOC.mp3";
import DRUMS from "../sounds/DRUMS.mp3";
import HE_HE_VOC from "../sounds/HE HE VOC.mp3";
import HIGH_VOC from "../sounds/HIGH VOC.mp3";
import JIBRISH from "../sounds/JIBRISH.mp3";
import LEAD_1 from "../sounds/LEAD 1.mp3";
import UUHO_VOC from "../sounds/UUHO VOC.mp3";
import { Channel } from "../utils/Channel";

export const channelArray = [
  new Channel({
    audio: _tambourine_shake_higher,
    name: "_tambourine_shake_higher",
  }),
  new Channel({ audio: BVOC, name: "BVOC" }),
  new Channel({ audio: DRUMS, name: "DRUMS" }),
  new Channel({ audio: HE_HE_VOC, name: "HE_HE_VOC" }),
  new Channel({ audio: HIGH_VOC, name: "HIGH_VOC" }),
  new Channel({ audio: JIBRISH, name: "JIBRISH" }),
  new Channel({ audio: LEAD_1, name: "LEAD_1" }),
  new Channel({ audio: UUHO_VOC, name: "UUHO_VOC" }),
];
