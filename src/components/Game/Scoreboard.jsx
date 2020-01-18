import React from "react";
import "./Scoreboard.scss";

export const Scoreboard = ({ scoreboard, stage }) => {
  const currentStageScore = (scoreboard[stage] || {});
  const currentCorrect = currentStageScore.correct || 0;
  const currentIncorrect = currentStageScore.incorrect || 0;
  const currentTotal = currentCorrect + currentIncorrect;

  const totalCorrect = Object.values(scoreboard).map(x => x.correct || 0).reduce((r, v) => r + v, 0);
  const totalIncorrect = Object.values(scoreboard).map(x => x.incorrect || 0).reduce((r, v) => r + v, 0);
  const totalTotal = totalCorrect + totalIncorrect;

  return <div className="scoreboard">
    <div className="scoreboard-header">
      Scoreboard
    </div>
    <div className="scoreboard-entry">
      <div className="scoreboard-entry-title">
        Total
      </div>
      <div className="scoreboard-value scoreboard-total">
        {((totalCorrect / totalTotal) * 100) | 0}% of {totalTotal}
      </div>
      <div className="scoreboard-value scoreboard-correct">
        {totalCorrect}
      </div>
      <div className="scoreboard-value scoreboard-incorrect">
        {totalIncorrect}
      </div>
    </div>
    {
      !!stage && <div className="scoreboard-entry">
        <div className="scoreboard-entry-title">
          Current stage
        </div>
        <div className="scoreboard-value scoreboard-total">
          {((currentCorrect / currentTotal) * 100) | 0}% of {currentTotal}
        </div>
        <div className="scoreboard-value scoreboard-correct">
          {currentCorrect}
        </div>
        <div className="scoreboard-value scoreboard-incorrect">
          {currentIncorrect}
        </div>
      </div>
    }
  </div>;
};
