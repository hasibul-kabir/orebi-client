// import React, { useEffect, useState } from 'react';

// const useDropdown = ({ navRef }) => {
//     const [open, setOpen] = useState(false);

//     useEffect(() => {
//         document.body.addEventListener("click", (e) => {
//             if (navRef.current.contains(e.target)) {
//                 setOpen(true)
//             } else {
//                 setOpen(false)
//             }
//         })
//     }, [])
//     return { open }
// }

// export default useDropdown