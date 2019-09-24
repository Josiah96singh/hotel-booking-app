import React from "react";
import RoomFilter from "./RoomFilter";
import RoomList from "./RoomList";
import { withRoomConsumer } from "../Context";
import Loading from "./Loading";

function RoomContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;
  // console.log(context);
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <RoomFilter rooms={rooms} />
      <RoomList rooms={sortedRooms} />
    </div>
  );
}

export default withRoomConsumer(RoomContainer);

// export default function RoomsContainer() {
//   return (
//     <RoomConsumer>
//       {value => {
//         console.log(value);
//         const { loading, sortedRooms, rooms } = value;
//         if (loading) {
//           return <Loading />;
//         }
//         return (
//           <div>
//             Hello from Room Containter
//             <RoomFilter rooms={rooms} />
//             <RoomList rooms={sortedRooms} />
//           </div>
//         );
//       }}
//     </RoomConsumer>
//   );
// }
