// // // test('renders learn react link', () => {
// // //   render(<App />);
// // //   const linkElement = screen.getByText(/learn react/i);
// // //   expect(linkElement).toBeInTheDocument();
// // // });

// // // 1. ტესტირება ციფრების
// // // 2. ტესტირება ტექტსის
// // // 3. ტესტირება boolean მნიშვნელობების
// // // 4. ტესტირება ფუნქციები

// // const successCase = [
// //   {
// //     id:1,
// //     amount:200,
// //     date:"2023-07-04"
// //   },
// //   {
// //     id:3,
// //     amount:1200,
// //     date:"2023-07-07"
// //   },
// //   {
// //     id:4,
// //     amount:3000,
// //     date:"2023-07-08"
// //   }
// // ]

// // const expenses = [
// //   {
// //     id:3,
// //     amount:1200,
// //     date:"2023-07-07"
// //   },
// //   {
// //     id:4,
// //     amount:3000,
// //     date:"2023-07-08"
// //   },
// //   {
// //     id:1,
// //     amount:200,
// //     date:"2023-07-04"
// //   },
// // ]

// const sortArryFromSmallToBig = (expenses) => {
//   if (!expenses) throw new Error("missing expenses array")
//   // if (!Array.isArray(expenses)) throw new Error("input arg not array!")
//   return expenses.sort((a,b) => a.amount - b.amount);
// }

// // describe("მარტივი მონაცემთა ტიპების ტესტები", () => {

// //   it('უნდა დაარტყას ერორი თიუ არგუმენტი არ მიეწოდა ფუნქციას (missing expenses array)', () => {
// //     const expesnesData = ""
// //     // const sortedArray =
// //     // expect(sortedArray).toBe(successCase)
// //     expect(() =>  sortArryFromSmallToBig(expesnesData)).toThrow("");
// //   })

// //   it('უნდა დაარტყას არ არის მასივის არგუმენტ თუ არგუმნენტი არ არის სია', () => {
// //     const expesnesData = {}
// //     // const sortedArray =
// //     // expect(sortedArray).toBe(successCase)
// //     expect(() =>  sortArryFromSmallToBig(expesnesData)).toThrow("input arg not array!");
// //   })

// //   it('უნდა დააბრუნოს მასივი სორტირებული პატარიდან დიდამდე', () => {
// //     const sorted = sortArryFromSmallToBig(expenses)
// //     expect(sorted[0]).toEqual(successCase[0])
// //   })

// // })
// const expenses = [
//   {
//     id: 1,
//     amount: 1200,
//     date: "2023-07-07",
//   },
//   {
//     id: 2,
//     amount: 3000,
//     date: "2023-07-08",
//   },
//   {
//     id: 3,
//     amount: 200,
//     date: "2023-07-04",
//   },
//   {
//     id: 4,
//     amount: 600,
//     date: "2023-07-04",
//   },
//   {
//     id: 6,
//     amount: 500,
//     date: "2023-07-02",
//   },
// ];

// describe("ფილტრაციის ფუნქციის ტესტები", () => {
//   it("CASE. უნდა დაარტუყას ერორი თუ აკლია არგუმენტები FILTERS", () => {
//     expect(() => filterArrayByOptions([], null)).toThrow(
//       "missing array of filters"
//     );
//   });

//   it("CASE. უნდა დაარტუყას ერორი თუ აკლია არგუმენტები ARRAY", () => {
//     expect(() => filterArrayByOptions(null, { minAmount: 20 })).toThrow(
//       "missing array of filters"
//     );
//   });

//   it("CASE. უნდა გაფილტტროს თარიღის მიხედვით,", () => {
//     const filter = {
//       date: "2023-07-02",
//     };

//     const expectedArray = [
//       {
//         id: 6,
//         amount: 600,
//         date: "2023-07-02",
//       },
//     ];
//     const res = filterArrayByOptions(expenses, filter);
//     expect(res).toEqual(expect.arrayContaining(expectedArray));
//   });

//   it("CASE. უნდა გაფილტროს min/max amount ებუთ", () => {
//     const filter = {
//       minAmount: 500,
//       maxAmount: 1800,
//     };

//     const expectedArray = [
//       {
//         id: 4,
//         amount: 600,
//         date: "2023-07-04",
//       },
//       {
//         id: 1,
//         amount: 1200,
//         date: "2023-07-07",
//       },
//     ];
//     const res = filterArrayByOptions(expenses, filter);
//     expect(res).toEqual(expect.arrayContaining(expectedArray));
//   });
// });

// function filterArrayByOptions(array, filters) {
//   if (!array || !filters) throw new Error("missing array of filters");

//   return array.filter((item) => {
//     if (filters.minAmount && item.amount < filters.minAmount) {
//       return false;
//     }

//     if (filters.maxAmount && item.amount > filters.maxAmount) {
//       return false;
//     }

//     if (filters.date && item.date !== filters.date) {
//       return false;
//     }

//     return true;
//   });
// }


// 

const users =  [{"george":"59902020"}, {"alex": "500"}]

// {
//   "george":"59902020",
//   "alex":"500"
// }


function transformArrayIntoObject(){

}



describe('Should test function', () => {
  
})
