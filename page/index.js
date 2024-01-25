import { getText } from "@zos/i18n";
import { LocalStorage } from "@zos/storage";
import hmUI, { createWidget, widget, event } from "@zos/ui";
import {
  FIRST_SCORE,
  ADD_FIVE_BUTTON,
  ADD_TEN_BUTTON,
  MINUS_FIVE_BUTTON,
  MINUS_TEN_BUTTON,
  DEVICE_HEIGHT,
  DEVICE_WIDTH,
  PLAYER_ONE_RECT,
  PLAYER_TWO_RECT,
  PLAYER_THREE_RECT,
  PLAYER_FOUR_RECT,
  RESET_BUTTON,
  SELECTED_PLAYER,
} from "./styles.js";

import { getSettings } from "@zos/display";

scores = [0, 0, 0, 0];
players = ["A: ", "B: ", "C: ", "D: "];
selectedScore = -1;
localStorage = new LocalStorage();

Page({
  build() {
    selected_player = createWidget(widget.TEXT, SELECTED_PLAYER);
    // Player rectangles
    rect_one = createWidget(widget.FILL_RECT, PLAYER_ONE_RECT);
    rect_two = createWidget(widget.FILL_RECT, PLAYER_TWO_RECT);
    rect_three = createWidget(widget.FILL_RECT, PLAYER_THREE_RECT);
    rect_four = createWidget(widget.FILL_RECT, PLAYER_FOUR_RECT);

    rectangles = [rect_one, rect_two, rect_three, rect_four];

    for (let i = 0; i < rectangles.length; i++) {
      rectangles[i].addEventListener(event.CLICK_UP, (info) => {
        console.log(info);
        selectedScore = i;
        selected_player.setProperty(hmUI.prop.MORE, {
          text: "EDIT: [ " + players[selectedScore][0] + " ]",
        });
        console.log("Changing selection to: " + i);
      });
    }

    // score text display
    score1_display = createWidget(widget.TEXT, {
      ...SCORE_VIEW,
      x: DEVICE_WIDTH / 2,
      y: DEVICE_WIDTH / 4 - 80,
      color: 0xffffff,
      text_size: px(30),
      text: "A: " + scores[0].toString(),
    });
    score2_display = createWidget(widget.TEXT, {
      ...SCORE_VIEW,
      x: DEVICE_WIDTH / 2,
      y: (DEVICE_WIDTH / 4) * 2 - 80,
      color: 0xffffff,
      text_size: px(30),
      text: "B: " + scores[1].toString(),
    });

    score3_display = createWidget(widget.TEXT, {
      ...SCORE_VIEW,
      w: DEVICE_WIDTH,
      x: DEVICE_WIDTH / 2,
      y: (DEVICE_WIDTH / 4) * 3 - 80,
      color: 0xffffff,
      text_size: px(30),
      text: "C: " + scores[2].toString(),
    });

    score4_display = createWidget(widget.TEXT, {
      ...SCORE_VIEW,
      x: DEVICE_WIDTH / 2,
      y: (DEVICE_WIDTH / 4) * 4 - 80,
      color: 0xffffff,
      text_size: px(30),
      text: "D: " + scores[2].toString(),
    });

    // List of player buttons
    player_displays = [
      score1_display,
      score2_display,
      score3_display,
      score4_display,
    ];

    for (let i = 0; i < player_displays.length; i++) {
      player_displays[i].addEventListener(event.CLICK_UP, (info) => {
        selectedScore = i;
        selected_player.setProperty(hmUI.prop.MORE, {
          text: "EDIT: [ " + players[selectedScore][0] + " ]",
        });
      });
    }
    updateScore = (value, scorer) => {
      if (scorer < 0) {
        return;
      }
      if (scores[scorer] + value < 0) {
        scores[scorer] = 0;
      } else {
        scores[scorer] = scores[scorer] + value;
      }

      player_displays[selectedScore].setProperty(hmUI.prop.MORE, {
        text: players[selectedScore] + scores[scorer].toString(),
      });
    };

    // Buttons and their functions
    createWidget(widget.BUTTON, {
      ...ADD_FIVE_BUTTON,
      x: 100,
      y: DEVICE_WIDTH / 2 - 50,
      click_func: () => {
        updateScore(5, selectedScore);
      },
    });

    createWidget(widget.BUTTON, {
      ...ADD_TEN_BUTTON,
      x: 150,
      y: DEVICE_WIDTH / 2 - 50,
      click_func: () => {
        updateScore(10, selectedScore);
      },
    });

    createWidget(widget.BUTTON, {
      ...MINUS_FIVE_BUTTON,
      x: 100,
      y: DEVICE_WIDTH / 2 + 10,
      click_func: () => {
        updateScore(-5, selectedScore);
      },
    });

    createWidget(widget.BUTTON, {
      ...MINUS_TEN_BUTTON,
      x: 150,
      y: DEVICE_WIDTH / 2 + 10,
      click_func: () => {
        updateScore(-10, selectedScore);
      },
    });

    createWidget(widget.BUTTON, {
      ...RESET_BUTTON,
      x: 100,
      y: DEVICE_WIDTH / 2 + 80,
      click_func: () => {
        if (selectedScore < 0) {
          return;
        }
        let currentScore = scores[selectedScore];
        updateScore(-currentScore, selectedScore);
      },
    });

    //
  },
  onInit() {
    console.log("reading scores...");
    scores = localStorage.getItem("domino-score-scores", [0, 0, 0, 0]);
    console.log(getSettings());
  },
  onDestroy() {
    console.log("saving scores...");
    localStorage.setItem("domino-score-scores", scores);
  },
});
