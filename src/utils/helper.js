export const findQuestion = (questions, name) => {
  const question = questions.find((q) => q.name === name);
  if (question) {
    return question;
  }
};

export const handleOperation = ({ valueOfField, operation, value }) => {
  switch (operation) {
    case "eq":
      return valueOfField === value;
    case "neq":
      return valueOfField !== value;
    case "gt":
      return valueOfField > value;
    case "gte":
      return valueOfField >= value;
    case "lt":
      return valueOfField < value;
    case "lte":
      return valueOfField <= value;
    case "in":
      return value.includes(valueOfField);
    case "nin":
      return !value.includes(valueOfField);
    case "contains":
      return valueOfField.includes(value);
    case "ncontains":
      return !valueOfField.includes(value);
    default:
      //this will make exhaustive checking
      const _never = operation;
  }
};

export const filterQuestions = (questions, formValue) => {
  return questions.filter((question) => {
    if (!question.conditions) {
      return true;
    }
    return question.conditions.every((condition) => {
      const valueOfField = formValue[condition?.valueOfField];
      return handleOperation({
        valueOfField,
        operation: condition.operation,
        value: condition.value,
      });
    });
  });
};
