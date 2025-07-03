

// // import React from 'react';

// // /* ============== ANIMATIONS ============== */
// // const scrollAnimations = `
// //   @keyframes scrollUp   { 0% {transform:translateY(0%);}   100% {transform:translateY(-50%);} }
// //   @keyframes scrollDown { 0% {transform:translateY(-50%);} 100% {transform:translateY(0%);}  }
// // `;

// // /* ============ LIGHT COLOR PALETTE ============ */
// // const palette = {
// //   ice:    '#E4E8ED', // lighter gray-blue
// //   navy:   '#DDE3EB', // pale navy
// //   brick:  '#F4B29A', // light terracotta
// //   salmon: '#FCD5C5', // soft salmon
// //   blush:  '#FCE6DF', // blush pink
// // };

// // /* ============ SCROLLING COLUMN ============ */
// // const ScrollingColumn = ({ cardsData, direction = 'up', borderColor = 'border-transparent' }) => {
// //   const animationName = direction === 'up' ? 'scrollUp' : 'scrollDown';

// //   return (
// //     <div className={`w-[190px] h-[620px] overflow-hidden flex-shrink-0 rounded-2xl shadow-md border ${borderColor}`}>
// //       <div className="flex flex-col" style={{ animation: `${animationName} 16s linear infinite` }}>
// //         {[...cardsData, ...cardsData].map((card, i) => (
// //           <div
// //             key={i}
// //             className="w-[200px] h-[300px] mx-auto my-3 rounded-xl overflow-hidden flex items-center justify-center"
// //             style={{ background: card.bg }}
// //           >
// //             {card.img ? (
// //               <img src={card.img} alt={card.alt} className="w-full h-full object-cover" />
// //             ) : (
// //               <span className="text-lg font-semibold text-gray-700 drop-shadow">{card.content}</span>
// //             )}
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // /* ============ MAIN HERO ============ */
// // function HeaderScrolling() {
// //   const pics = [
// //     'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&q=80',
// //     'https://images.unsplash.com/photo-1584697964192-37e6adf26c4a?auto=format&fit=crop&w=600&q=80',
// //     'https://images.unsplash.com/photo-1554774853-b414d4ecc6f5?auto=format&fit=crop&w=600&q=80',
// //   ];

// //   const col1 = [
// //     { img: pics[0], alt: 'Training 1', bg: palette.ice },
// //     { content: 'Learn', bg: palette.navy },
// //     { img: pics[1], alt: 'Training 2', bg: palette.salmon },
// //   ];

// //   const col2 = [
// //     { content: 'Grow', bg: palette.brick },
// //     { img: pics[2], alt: 'Training 3', bg: palette.blush },
// //     { content: 'Lead', bg: palette.ice },
// //   ];

// //   const col3 = [
// //     { img: pics[1], alt: 'Training 4', bg: palette.navy },
// //     { content: 'Collaborate', bg: palette.salmon },
// //     { img: pics[0], alt: 'Training 5', bg: palette.blush },
// //   ];

// //   return (
// //     <>
// //       <style>{scrollAnimations}</style>

// //       <section className="relative overflow-hidden">
// //         {/* light pastel background */}
// //         <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#fefefe] via-[#fbeeee] to-[#f8f4ff]" />

// //         <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row items-center gap-14">
// //           {/* ------ LEFT COPY ------ */}
// //           <div className="flex-1 max-w-xl">
// //             <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 leading-snug">
// //               Empowering professionals to&nbsp;grow smarter
// //             </h2>
// //             <p className="mt-6 text-lg text-slate-600">
// //               Present sharper, and perform better with expert‑led corporate training and professional
// //               development programs.
// //             </p>

// //             {/* Stats */}
// //             <div className="mt-10 grid grid-cols-3 gap-6 max-w-xs text-center">
// //               <StatBlock value="99%" label="NPS Score" />
// //               <StatBlock value="30K+" label="Learners" />
// //               <StatBlock value="4.8/5" label="Rating" />
// //             </div>
// //           </div>

// //           {/* ------ RIGHT SCROLLING CARDS ------ */}
// //           <div className="flex-1 flex justify-center lg:justify-end">
// //             <div className="origin-top-right rotate-[8deg] flex gap-6">
// //               <ScrollingColumn cardsData={col1} direction="up" borderColor="border-[#d4dce4]" />
// //               <ScrollingColumn cardsData={col2} direction="down" borderColor="border-[#f6cfc2]" />
// //               <ScrollingColumn cardsData={col3} direction="up" borderColor="border-[#f9e3da]" />
// //             </div>
// //           </div>
// //         </div>
// //       </section>
// //     </>
// //   );
// // }

// // /* helper for stats */
// // const StatBlock = ({ value, label }) => (
// //   <div>
// //     <p className="text-3xl font-bold text-slate-900">{value}</p>
// //     <p className="text-sm font-medium text-slate-600">{label}</p>
// //   </div>
// // );

// // export default HeaderScrolling;










// import React from 'react';

// /* ============== ANIMATIONS ============== */
// const scrollAnimations = `
//   @keyframes scrollUp   { 0% {transform:translateY(0%);}   100% {transform:translateY(-50%);} }
//   @keyframes scrollDown { 0% {transform:translateY(-50%);} 100% {transform:translateY(0%);}  }
// `;

// /* ============ LIGHT COLOR PALETTE ============ */
// const palette = {
//   ice:    '#E4E8ED',
//   navy:   '#DDE3EB',
//   brick:  '#F4B29A',
//   salmon: '#FCD5C5',
//   blush:  '#FCE6DF',
// };

// /* ============ SCROLLING COLUMN ============ */
// const ScrollingColumn = ({ cardsData, direction = 'up', borderColor = 'border-transparent' }) => {
//   const animationName = direction === 'up' ? 'scrollUp' : 'scrollDown';

//   return (
//     <div
//       className={`w-[190px] h-[620px] overflow-hidden flex-shrink-0 rounded-2xl shadow-md border ${borderColor}`}
//     >
//       <div
//         className="flex flex-col"
//         style={{ animation: `${animationName} 16s linear infinite` }}
//       >
//         {[...cardsData, ...cardsData].map((card, i) => (
//           <div
//             key={i}
//             className="w-[200px] h-[300px] mx-auto my-3 rounded-xl overflow-hidden"
//             style={{ background: card.bg }}
//           >
//             <img
//               src={card.img}
//               alt={card.alt}
//               className="w-full h-full object-cover"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// /* ============ MAIN HERO ============ */
// function HeaderScrolling() {
//   /* six corporate‑training themed images */
//   const pics = [
//     'https://images.unsplash.com/photo-1554774853-b414d4ecc6f5?auto=format&fit=crop&w=600&q=80',
//     'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&q=80',
//     'https://images.unsplash.com/photo-1584697964192-37e6adf26c4a?auto=format&fit=crop&w=600&q=80',
//     'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=600&q=80',
//     'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&q=80',
//     'https://images.unsplash.com/photo-1616594039969-3c9e975aa52f?auto=format&fit=crop&w=600&q=80',
//   ];

//   const col1 = [
//     { img: pics[0], alt: 'Team discussion', bg: palette.ice },
//     { img: pics[1], alt: 'Speaker training', bg: palette.navy },
//     { img: pics[2], alt: 'Workshop collaboration', bg: palette.salmon },
//   ];

//   const col2 = [
//     { img: pics[3], alt: 'Brainstorm session', bg: palette.brick },
//     { img: pics[4], alt: 'Group presentation', bg: palette.blush },
//     { img: pics[5], alt: 'Leadership coaching', bg: palette.ice },
//   ];

//   const col3 = [
//     { img: pics[1], alt: 'Team engagement', bg: palette.navy },
//     { img: pics[4], alt: 'Strategy meeting', bg: palette.salmon },
//     { img: pics[2], alt: 'Project planning', bg: palette.blush },
//   ];

//   return (
//     <>
//       <style>{scrollAnimations}</style>

//       <section className="relative overflow-hidden">
//         <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#fefefe] via-[#fbeeee] to-[#f8f4ff]" />

//         <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row items-center gap-14">
//           {/* ------ LEFT COPY ------ */}
//           <div className="flex-1 max-w-xl">
//             <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 leading-snug">
//               Empowering professionals to&nbsp;grow smarter
//             </h2>
//             <p className="mt-6 text-lg text-slate-600">
//               Present sharper, and perform better with expert‑led corporate training and professional
//               development programs.
//             </p>

//             <div className="mt-10 grid grid-cols-3 gap-6 max-w-xs text-center">
//               <StatBlock value="99%" label="NPS Score" />
//               <StatBlock value="30K+" label="Learners" />
//               <StatBlock value="4.8/5" label="Rating" />
//             </div>
//           </div>

//           {/* ------ RIGHT SCROLLING CARDS ------ */}
//           <div className="flex-1 flex justify-center lg:justify-end">
//             <div className="origin-top-right rotate-[8deg] flex gap-6">
//               <ScrollingColumn cardsData={col1} direction="up"   borderColor="border-[#d4dce4]" />
//               <ScrollingColumn cardsData={col2} direction="down" borderColor="border-[#f6cfc2]" />
//               <ScrollingColumn cardsData={col3} direction="up"   borderColor="border-[#f9e3da]" />
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// /* helper for stats */
// const StatBlock = ({ value, label }) => (
//   <div>
//     <p className="text-3xl font-bold text-slate-900">{value}</p>
//     <p className="text-sm font-medium text-slate-600">{label}</p>
//   </div>
// );

// export default HeaderScrolling;





import React from 'react';

/* ============== ANIMATIONS ============== */
const scrollAnimations = `
  @keyframes scrollUp   { 0% {transform:translateY(0%);}   100% {transform:translateY(-50%);} }
  @keyframes scrollDown { 0% {transform:translateY(-50%);} 100% {transform:translateY(0%);}  }
`;

/* ============ LIGHT COLOR PALETTE ============ */
const palette = {
  ice:    '#E4E8ED',
  navy:   '#DDE3EB',
  brick:  '#F4B29A',
  salmon: '#FCD5C5',
  blush:  '#FCE6DF',
};

/* ============ SCROLLING COLUMN ============ */
const ScrollingColumn = ({ cardsData, direction = 'up', borderColor = 'border-transparent' }) => {
  const animationName = direction === 'up' ? 'scrollUp' : 'scrollDown';

  return (
    <div
      className={`w-[190px] h-[620px] overflow-hidden flex-shrink-0 rounded-2xl shadow-md border ${borderColor}`}
    >
      <div
        className="flex flex-col"
        style={{ animation: `${animationName} 16s linear infinite` }}
      >
        {/* duplicate for seamless loop */}
        {[...cardsData, ...cardsData].map((card, i) => (
          <div
            key={i}
            className="w-[200px] h-[300px] mx-auto my-3 rounded-xl overflow-hidden"
            style={{ background: card.bg }}
          >
            <img
              src={card.img}
              alt={card.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

/* ============ MAIN HERO ============ */
function HeaderScrolling() {
  /* 18 royalty‑free, business‑friendly Unsplash URLs */
  const pics = [
    // 0‑5
    'https://www.avanse.com/blogs/images/blogs-migration-169.jpg',
    'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&q=80',
    "https://images.unsplash.com/photo-1552664730-d307ca884978?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya3Nob3B8ZW58MHx8MHx8fDA%3D",
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4cWxK7sNCQnGKIu8hfsyyN-hslZvSqdBx2w&s',
    'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80',
    'https://images.ctfassets.net/pdf29us7flmy/4C1SDkpwtqI2xy9GWabT42/af92a6a302d118c09f2686c22af3d9a8/shutterstock_796329814-red__1_.jpg?w=720&q=100&fm=jpg',
    // 6‑11
    'https://images.unsplash.com/photo-1542744173-05336fcc7ad4?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80',
    'https://d.newsweek.com/en/full/2170657/strategic-planning.jpg',
    'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=600&q=80',
    'https://professional.dce.harvard.edu/wp-content/uploads/sites/9/2024/05/leadership.jpg',
    // 12‑17
    'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80',
    'https://138596.fs1.hubspotusercontent-na1.net/hubfs/138596/The%20Transformative%20Power%20of%20Mentoring%20%E2%80%93%204%20Crucial%20Benefits.jpg',
    'https://imageio.forbes.com/specials-images/imageserve/5fd3c8c1abab979ed2405b93/Excited-diverse-business-team-employees-screaming-celebrating-good-news-success/960x0.jpg?format=jpg&width=960',
    'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1526948531399-320e7e40f0ca?auto=format&fit=crop&w=600&q=80',
  ];

  /* each column now has SIX images */
  const col1 = [
    { img: pics[0], alt: 'Discussion',     bg: palette.ice },
    { img: pics[1], alt: 'Seminar',        bg: palette.navy },
    { img: pics[2], alt: 'Workshop',       bg: palette.salmon },
    { img: pics[3], alt: 'Team building',  bg: palette.brick },
    { img: pics[4], alt: 'Presentation',   bg: palette.blush },
    { img: pics[5], alt: 'Whiteboarding',  bg: palette.ice },
  ];

  const col2 = [
    { img: pics[6], alt: 'Brainstorm',     bg: palette.brick },
    { img: pics[7], alt: 'Planning',       bg: palette.salmon },
    { img: pics[8], alt: 'Training',       bg: palette.blush },
    { img: pics[9], alt: 'Strategy',       bg: palette.ice },
    { img: pics[10], alt: 'Collaboration', bg: palette.navy },
    { img: pics[11], alt: 'Leadership',    bg: palette.salmon },
  ];

  const col3 = [
    { img: pics[12], alt: 'Workshop',      bg: palette.blush },
    { img: pics[13], alt: 'Coding camp',   bg: palette.ice },
    { img: pics[14], alt: 'Mentoring',     bg: palette.navy },
    { img: pics[15], alt: 'Team goals',    bg: palette.salmon },
    { img: pics[16], alt: 'Kick‑off',      bg: palette.brick },
    { img: pics[17], alt: 'Project review',bg: palette.ice },
  ];

  return (
    <>
      <style>{scrollAnimations}</style>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#fefefe] via-[#fbeeee] to-[#f8f4ff]" />

        <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row items-center gap-14">
          {/* ------ LEFT COPY ------ */}
          <div className="flex-1 max-w-xl">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 leading-snug">
              Empowering professionals to&nbsp;grow smarter
            </h2>
            <p className="mt-6 text-lg text-slate-600">
              Present sharper, and perform better with expert‑led corporate training and professional
              development programs.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-6 max-w-xs text-center">
              <StatBlock value="99%" label="NPS Score" />
              <StatBlock value="30K+" label="Learners" />
              <StatBlock value="4.8/5" label="Rating" />
            </div>
          </div>

          {/* ------ RIGHT SCROLLING CARDS ------ */}
          <div className="flex-1 flex justify-center lg:justify-end pt-[6%]">
            <div className="origin-top-right rotate-[8deg] flex gap-6">
              <ScrollingColumn cardsData={col1} direction="up"   borderColor="border-[#d4dce4]" />
              <ScrollingColumn cardsData={col2} direction="down" borderColor="border-[#f6cfc2]" />
              <ScrollingColumn cardsData={col3} direction="up"   borderColor="border-[#f9e3da]" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* helper for stats */
const StatBlock = ({ value, label }) => (
  <div>
    <p className="text-3xl font-bold text-slate-900">{value}</p>
    <p className="text-sm font-medium text-slate-600">{label}</p>
  </div>
);

export default HeaderScrolling;
