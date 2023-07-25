import { useState, useEffect } from "react";

import { insertExpense, getCurrentUser } from '../firebase'
import {
  StyledDate,
  StyledLabel,
  StyledInputContainer,
  StyledContainer,
  StyledFormContainer,
  StyledHeading,
  StyledInput,
  StyledSubmitButton,
  RadioButtonsContainer,
  StyledSelect,
} from "./AddExpenseStyled";
import { readLocalStorage } from "../helpers/helpers";
import { useNavigate } from "react-router-dom";

const incomeOptions = [
  {
    id: 1,
    option: "invoice",
  },
  {
    id: 2,
    option: "sallary",
  },
];

const expenseOptions = [
  {
    id: 1,
    option: "shopping",
  },
  {
    id: 2,
    option: "gym",
  },
];

const AddExpense = () => {
   const navigate = useNavigate();
  const [amount, setAmount] = useState(null);
  const [date, setDate] = useState("");
  const [type, setType] = useState("expense");
  const [category, setCategory] = useState("");
  const [currentUser, setCurrentUser] = useState();

  const loadCurrentUser = async () => {
    const user = await getCurrentUser()
    setCurrentUser(user);
  }


  useEffect(() => {
    loadCurrentUser()
  }, [])

  const onAddExpense = async (e) => {
    e.preventDefault();

    const expense = {
      id: new Date().getTime(),
      amount: parseInt(amount),
      date,
      type,
      category,
      userId: currentUser.uid
    };

    console.log(expense)

    await insertExpense(expense.id, expense);
    navigate("/")



  };

  const onCategoryChange = (e) => {
    setCategory(e.target.value);
  };
  return (
    <StyledContainer>
      <StyledFormContainer>
        <StyledHeading>{/* <Slider/> */}</StyledHeading>
        <form>
          <StyledInputContainer>
            <StyledLabel>მონიშნე თარიღი:</StyledLabel>
            <StyledDate
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
              type="date"
            />
          </StyledInputContainer>
          <StyledInputContainer>
            <StyledLabel>შეიყვანე თანხა:</StyledLabel>
            <StyledInput
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </StyledInputContainer>
          <StyledInputContainer>
            <StyledLabel>მონიშნე კატეგორია:</StyledLabel>
            <RadioButtonsContainer>
              <div onChange={(e) => setType(e.target.value)}>
                <input type="radio" value="expense" name="type" /> Expense
                <input type="radio" value="income" name="type" /> Income
              </div>
            </RadioButtonsContainer>
          </StyledInputContainer>
          <StyledInputContainer>
            <StyledSelect value={category} onChange={onCategoryChange}>
              <>
                {type === "expense" && (
                  <>
                    {expenseOptions.map((obj, index) => {
                      return (
                        <>
                          <option label={obj.option} key={obj.id}>
                            {obj.option}
                          </option>
                        </>
                      );
                    })}
                  </>
                )}
                {type === "income" && (
                  <>
                    {incomeOptions.map((obj, index) => {
                      return (
                        <>
                          <option label={obj.option} key={obj.id}>
                            {obj.option}
                          </option>
                        </>
                      );
                    })}
                  </>
                )}
              </>
            </StyledSelect>
          </StyledInputContainer>
          <StyledSubmitButton type="submit" onClick={onAddExpense} />
        </form>
      </StyledFormContainer>
    </StyledContainer>
  );
};

export default AddExpense;
