import s from "./FeedBack.module.css";

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <>
      {options.map((option) => (
        <button
          key={option}
          type="button"
          name={option}
          onClick={() => onLeaveFeedback(option)}
          className={s.button}
        >
          {option}
        </button>
      ))}
    </>
  );
}

export default FeedbackOptions;
