
// import { Switch } from "@mui/material";
// import React from "react";

// const Producttable = ({ product }) => {
//   console.log(product);
//   return (
//     <table class="table ">
//       <thead class="thead-dark">
//         <tr>
//           <th scope="col">id</th>
//           <th scope="col">product Image</th>
//           <th scope="col">product Name</th>
//           <th scope="col">price</th>
//           <th scope="col">Description</th>
//           <th scope="col">available</th>
//         </tr>
//       </thead>
//       <tbody>
//         {product?.map((val, ind) => {
//           return (
//             <tr>
//               <td>
//                 <b>{val.id}</b>
//               </td>
//               <td>
//                 <img src={val.productImage} width={70} height={70} />
//               </td>
//               <td>{val.productName}</td>
//               <td>{val.price}</td>
//               <td>{val.desc}</td>
//               {val.available ? (
//                 <td>
//                   <Switch checked />
//                 </td>
//               ) : (
//                 <td>
//                   <Switch />
//                 </td>
//               )}
//             </tr>
//           );
//         })}
//       </tbody>
//     </table>
//   );
// };

// export default Producttable;
