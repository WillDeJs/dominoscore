import * as hmUI from "@zos/ui";
import { getDeviceInfo } from "@zos/device";
import { px } from "@zos/utils";

export const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = getDeviceInfo();

export const SCORE_VIEW = {
  w: px(DEVICE_WIDTH),
  text_style: hmUI.text_style.ELLIPSIS,
  align_v: hmUI.align.CENTER_V,
};

export const ADD_FIVE_BUTTON = {
  text: "+5",
  radius: px(40),
  press_color: 0x00a0a0,
  normal_color: 0x00c00c,
  text_size: 30,
  w: px(60),
  h: px(60),
};

export const ADD_TEN_BUTTON = {
  text: "+10",
  radius: px(40),
  press_color: 0x00a0a0,
  normal_color: 0x00c000,
  text_size: 30,
  w: px(60),
  h: px(60),
};

export const MINUS_FIVE_BUTTON = {
  text: "-5",
  radius: px(40),
  press_color: 0x800000,
  normal_color: 0xc00000,
  text_size: 30,
  w: px(60),
  h: px(60),
};

export const MINUS_TEN_BUTTON = {
  text: "-10",
  text_size: 30,
  radius: px(40),
  press_color: 0x800000,
  normal_color: 0xc00000,
  w: px(60),
  h: px(60),
};

export const RESET_BUTTON = {
  text: "Reset",
  press_color: 0xb179d7,
  text_size: 30,
  normal_color: 0xac4f95,
  radius: px(10),
  w: px(120),
  h: px(40),
};

export const PLAYER_ONE_RECT = {
  x: px(DEVICE_WIDTH / 2 - 30),
  y: px(0),
  w: px(DEVICE_WIDTH),
  h: px(DEVICE_WIDTH / 4),
  color: 0xff0000,
};
export const PLAYER_TWO_RECT = {
  x: px(DEVICE_WIDTH / 2 - 30),
  y: px((DEVICE_WIDTH / 4) * 1),
  w: px(DEVICE_WIDTH),
  h: px(DEVICE_WIDTH / 4),
  color: 0x0080ff,
};
export const PLAYER_THREE_RECT = {
  x: px(DEVICE_WIDTH / 2 - 30),
  y: px((DEVICE_WIDTH / 4) * 2),
  w: px(DEVICE_WIDTH),
  h: px(DEVICE_WIDTH / 4),
  color: 0x80ff80,
};
export const PLAYER_FOUR_RECT = {
  x: px(DEVICE_WIDTH / 2 - 30),
  y: px((DEVICE_WIDTH / 4) * 3),
  w: px(DEVICE_WIDTH),
  h: px(DEVICE_WIDTH / 4),
  color: 0xebda01,
};

export const SELECTED_PLAYER = {
  x: 80,
  y: DEVICE_WIDTH / 2 + 120,
  w: px(90),
  text_size: 30,
  text: "Tap Player",
};
