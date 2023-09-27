import mongoose from "mongoose";

const userIds = [
  new mongoose.Types.ObjectId(),
  
];
const postIds=[
    new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),

]

export const users = [
  {
    _id: userIds[0],
    username:"example@gmail.com",
    password:"temp",
  },

];

export const posts = [
  {
    _id: postIds[0],
    username:"example@gmail.com",
    title:"chatwithgit",
    subcontent:"fkdjfl;sjfdkjfkdlfjsdlkfjdlf;sd;dfjdsl;dflkjsdlkfjdlkfjdskfldjf;djfsdk;fdjlsdfjsd;lfkdjs;fsdjkfdslkfjdslkfjdsfjdslkfjdslkfjsdfjsdkfjdfksjflkdsjfdlksjfdslkfjdslfjlsdjdslkfjdslkfjsdlkfjsldkfjdsflkdsjfdklsfjsdlkfjsdlfjsdlkfjdslfjdslfjdsksdjfdslkfjsdlkfjsdfkslfjlksdfjsdlkfjdslkfjsdflkjsdt",
    date:new Date('2023-09-27'),
    content:["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna molestie at elementum eu facilisis sed. Nec feugiat nisl pretium fusce id velit ut tortor. In nulla posuere sollicitudin aliquam. Velit sed ullamcorper morbi tincidunt ornare massa eget. Egestas diam in arcu cursus euismod. Posuere lorem ipsum dolor sit amet consectetur. Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit lectus. Suscipit adipiscing bibendum est ultricies integer quis auctor. Fames ac turpis egestas integer. Morbi tristique senectus et netus. Ut tellus elementum sagittis vitae et leo duis ut diam. Massa enim nec dui nunc mattis enim ut tellus elementum. Mi eget mauris pharetra et ultrices. Enim ut tellus elementum sagittis vitae et. Netus et malesuada fames ac. Interdum velit laoreet id donec ultrices. Vulputate enim nulla aliquet porttitor. Dignissim enim sit amet venenatis urna cursus. Sed cras ornare arcu dui vivamus arcu","Consectetur adipiscing elit pellentesque habitant morbi tristique senectus. Et ultrices neque ornare aenean. Lorem sed risus ultricies tristique nulla aliquet. Nunc faucibus a pellentesque sit amet porttitor eget dolor. Sit amet luctus venenatis lectus. Montes nascetur ridiculus mus mauris vitae. Fringilla urna porttitor rhoncus dolor purus non enim. Aliquam etiam erat velit scelerisque in dictum non. Eu volutpat odio facilisis mauris sit amet massa vitae tortor. Venenatis a condimentum vitae sapien pellentesque habitant morbi. Porttitor eget dolor morbi non arcu risus quis varius quam. Pharetra diam sit amet nisl suscipit adipiscing bibendum. Eu ultrices vitae auctor eu augue ut lectus arcu. Ut diam quam nulla porttitor massa id neque aliquam vestibulum. Pellentesque diam volutpat commodo sed egestas egestas. Tellus orci ac auctor augue mauris augue neque gravida in. Aenean et tortor at risus viverra adipiscing.","Lobortis feugiat vivamus at augue. Amet consectetur adipiscing elit ut aliquam. Lorem mollis aliquam ut porttitor leo a. Ultrices mi tempus imperdiet nulla. Suspendisse potenti nullam ac tortor vitae purus faucibus ornare. At risus viverra adipiscing at in tellus integer feugiat. Mi proin sed libero enim sed faucibus turpis in eu. Amet purus gravida quis blandit. Ut aliquam purus sit amet luctus venenatis. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin. Duis at consectetur lorem donec. Mattis nunc sed blandit libero volutpat sed cras ornare arcu. Est ullamcorper eget nulla facilisi etiam dignissim. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus. Eget arcu dictum varius duis at consectetur lorem donec. Accumsan lacus vel facilisis volutpat est. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Massa eget egestas purus viverra accumsan in nisl nisi scelerisque. Nisi lacus sed viverra tellus in."],


   
    
    // userId: userIds[1],
    // firstName: "Steve",
    // lastName: "Ralph",
    // location: "New York, CA",
    // description: "Some really long random description",
    // picturePath: "post1.jpeg",
    // userPicturePath: "p3.jpeg",
    // likes: new Map([
    //   [userIds[0], true],
    //   [userIds[2], true],
    //   [userIds[3], true],
    //   [userIds[4], true],
    // ]),
    // comments: [
    //   "random comment",
    //   "another random comment",
    //   "yet another random comment",
    // ],
  },
  
];
