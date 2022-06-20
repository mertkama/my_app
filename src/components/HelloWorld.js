// import React from "react"
// import PropTypes from 'prop-types';
// import './HelloWorld.css'

// const HelloWorld = ({ resim, butonadı, petiketi, aktif, sayi, children }) => {
//     return (
//         <div className='helloWorldWrapper'>
//             <img alt="" className="helloWorldImage"
//                 src={resim} />
//             <button className='helloWorldButton'>{butonadı}</button>
//             <p className='helloWorldP'>{petiketi}</p>
//             <h1>Sayı : {sayi}</h1>
//             <h2>Aktif Mi ? {aktif == true ? "Aktif" : "Pasif"}</h2>
//             <div className="helloWorldRedArea">
//                 {children}
//             </div>


//         </div>
//     )
// }
// HelloWorld.propTypes = {
//     resim: PropTypes.string,
//     butonadı: PropTypes.string,
//     aktif: PropTypes.bool,
//     petiketi: PropTypes.string,
//     children: PropTypes.node,
//     sayi: PropTypes.number

// }

// HelloWorld.defaultProps = {
//     butonadı:"Varsayılan Buton Adı",
//     petiketi:"Varsayılan P Etiketi Metni",
//     sayi:1000,
//     aktif:false
// }

// export default HelloWorld