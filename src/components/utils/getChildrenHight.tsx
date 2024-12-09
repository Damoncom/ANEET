// // TODO:获取子元素的高度

// import React, { useRef, useEffect, useState } from "react";

// const useTotalChildrenHeight = () => {
//   const containerRef = useRef<HTMLDivElement | null>(null);
//   const [totalHeight, setTotalHeight] = useState<number>(0);

//   useEffect(() => {
//     if (containerRef.current) {
//       const container = containerRef.current;
//       let height = 0;

//       for (let i = 0; i < container.children.length; i++) {
//         const child = container.children[i] as HTMLElement;
//         height += child.offsetHeight;
//       }

//       setTotalHeight(height);
//     }
//   }, [containerRef]);

//   return { containerRef, totalHeight };
// };

// const ChildHeightComponent: React.FC = () => {
//   const { containerRef, totalHeight } = useTotalChildrenHeight();

//   return (
//     <div>
//       <div
//         ref={containerRef}
//         style={{ border: "1px solid black", padding: "10px" }}
//       >
//         <div style={{ height: "50px", backgroundColor: "#ececec" }}>
//           Child 1
//         </div>
//         <div style={{ height: "30px", backgroundColor: "#dcdcdc" }}>
//           Child 2
//         </div>
//         <div style={{ height: "40px", backgroundColor: "#bcbcbc" }}>
//           Child 3
//         </div>
//       </div>
//       <p>Total height of children: {totalHeight}px</p>
//     </div>
//   );
// };

// export default ChildHeightComponent;
