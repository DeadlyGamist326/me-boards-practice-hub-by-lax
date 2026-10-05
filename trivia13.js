const trivia13Data = [
  { q: ["How much money must you invest today in order to withdraw P1,000 per year for 10 years if the interest rate is 12%?"],
    choices: [
      ["P12,000"],
      ["P10,000"],
      ["P5,650"],
      ["P6,800"]
    ], answer: 2,
    topics: ["Ordinary Annuity (Present Worth)"],
    hints: [
      `<div class="kw-map"><div class="kw-row"><span class="kw-phrase">"invest today, withdraw equal amounts each year"</span><span class="kw-arrow">&rarr;</span><span class="kw-symbol">\\( P=R\\left[\\dfrac{(1+i)^{n}-1}{(1+i)^{n}\\,i}\\right] \\)</span></div></div><span class="problem-type-tag">Ordinary Annuity (Present Worth)</span>`,
      `<div class="formula-row"><span class="fr-left">\\(\\text{—}\\)</span><span class="fr-center">\\( P=R\\left[\\dfrac{(1+i)^{n}-1}{(1+i)^{n}\\,i}\\right] \\)</span><span class="fr-right">\\(\\text{—}\\)</span></div>`,
      `<div class="hint-formula">\\( R=1000,\\ i=0.12,\\ n=10 \\)</div>`,
      `<p class="hint-given">Given:</p><div class="formula-grid-3"><div class="formula-block">\\( R=1000 \\)</div><div class="formula-block">\\( i=0.12 \\)</div><div class="formula-block">\\( n=10 \\)</div></div><div class="formula-block">\\( P=R\\left[\\dfrac{(1+i)^{n}-1}{(1+i)^{n}\\,i}\\right] \\)</div><p class="hint-note">Substitute the given values:</p><div class="formula-block">\\( P=1000\\left[\\dfrac{(1+0.12)^{10}-1}{(1+0.12)^{10}(0.12)}\\right] \\)</div><p class="hint-note">Evaluate the annuity factor:</p><div class="formula-block">\\( P=1000(5.6502) \\)</div><p class="hint-note">Multiply:</p><div class="formula-block">\\( P=\\text{P}5{,}650 \\)</div><div class="hint-answer">Answer: C. \\( \\text{P}5{,}650 \\)</div>`
    ] },
  { q: ["An amount of P2000 is deposited in the bank monthly at 12% compounded monthly for 5 years. Find the amount in the bank after the last deposit."],
    choices: [
      ["P145,083"],
      ["P152,083"],
      ["P163,339"],
      ["P176,083"]
    ], answer: 2,
    topics: ["Ordinary Annuity (Future Worth)"],
    hints: [
      `<div class="kw-map"><div class="kw-row"><span class="kw-phrase">"deposited monthly, amount after the last deposit"</span><span class="kw-arrow">&rarr;</span><span class="kw-symbol">\\( F=R\\left[\\dfrac{(1+i)^{n}-1}{i}\\right] \\)</span></div></div><span class="problem-type-tag">Ordinary Annuity (Future Worth)</span>`,
      `<div class="formula-row"><span class="fr-left">\\(\\text{—}\\)</span><span class="fr-center">\\( F=R\\left[\\dfrac{(1+i)^{n}-1}{i}\\right] \\)</span><span class="fr-right">\\(\\text{—}\\)</span></div>`,
      `<div class="hint-formula">\\( R=2000,\\ i=\\dfrac{0.12}{12}=0.01,\\ n=5(12)=60 \\)</div>`,
      `<p class="hint-given">Given:</p><div class="formula-grid-3"><div class="formula-block">\\( R=2000 \\)</div><div class="formula-block">\\( i=\\dfrac{0.12}{12}=0.01 \\)</div><div class="formula-block">\\( n=5(12)=60 \\)</div></div><div class="formula-block">\\( F=R\\left[\\dfrac{(1+i)^{n}-1}{i}\\right] \\)</div><p class="hint-note">Substitute the given values:</p><div class="formula-block">\\( F=2000\\left[\\dfrac{(1+0.01)^{60}-1}{0.01}\\right] \\)</div><p class="hint-note">Evaluate the annuity factor:</p><div class="formula-block">\\( F=2000(81.6697) \\)</div><p class="hint-note">Multiply:</p><div class="formula-block">\\( F=\\text{P}163{,}339 \\)</div><div class="hint-answer">Answer: C. \\( \\text{P}163{,}339 \\)</div>`
    ] },
  { q: ["A father deposits P1500 at the end of first year and is expected to increase P300 each after the first deposit until the 20th year. Find the future amount of his savings at 10% annual interest."],
    choices: [
      ["P176,086.68"],
      ["P197,737.49"],
      ["P123,897.89"],
      ["P143,978.78"]
    ], answer: 1,
    topics: ["Uniform Gradient (Future Worth)"],
    hints: [
      `<div class="kw-map"><div class="kw-row"><span class="kw-phrase">"first deposit, then increases by a constant amount each year"</span><span class="kw-arrow">&rarr;</span><span class="kw-symbol">\\( F=A\\left[\\dfrac{(1+i)^{n}-1}{i}\\right]+\\dfrac{G}{i}\\left[\\dfrac{(1+i)^{n}-1}{i}-n\\right] \\)</span></div></div><span class="problem-type-tag">Uniform Gradient (Future Worth)</span>`,
      `<div class="formula-row"><span class="fr-left">\\(\\text{—}\\)</span><span class="fr-center">\\( F=A\\left[\\dfrac{(1+i)^{n}-1}{i}\\right]+\\dfrac{G}{i}\\left[\\dfrac{(1+i)^{n}-1}{i}-n\\right] \\)</span><span class="fr-right">\\(\\text{—}\\)</span></div>`,
      `<div class="hint-formula">\\( A=1500,\\ G=300,\\ i=0.10,\\ n=20 \\)</div>`,
      `<p class="hint-given">Given:</p><div class="formula-grid-4"><div class="formula-block">\\( A=1500 \\)</div><div class="formula-block">\\( G=300 \\)</div><div class="formula-block">\\( i=0.10 \\)</div><div class="formula-block">\\( n=20 \\)</div></div><div class="formula-block">\\( F=A\\left[\\dfrac{(1+i)^{n}-1}{i}\\right]+\\dfrac{G}{i}\\left[\\dfrac{(1+i)^{n}-1}{i}-n\\right] \\)</div><p class="hint-note">Substitute the given values:</p><div class="formula-block">\\( F=1500\\left[\\dfrac{(1.10)^{20}-1}{0.10}\\right]+\\dfrac{300}{0.10}\\left[\\dfrac{(1.10)^{20}-1}{0.10}-20\\right] \\)</div><p class="hint-note">Evaluate the future-worth factor:</p><div class="formula-block">\\( \\dfrac{(1.10)^{20}-1}{0.10}=57.2750 \\)</div><p class="hint-note">Substitute the factor:</p><div class="formula-block">\\( F=1500(57.2750)+3000(57.2750-20) \\)</div><p class="hint-note">Compute each part:</p><div class="formula-block">\\( F=85{,}912.50+111{,}825.00 \\)</div><p class="hint-note">Add:</p><div class="formula-block">\\( F=\\text{P}197{,}737.49 \\)</div><p class="hint-note">Note: the choices give the answer to the centavo, so this follows the gradient formula exactly (the unrounded factor 57.27500 gives 197,737.49).</p><div class="hint-answer">Answer: B. \\( \\text{P}197{,}737.49 \\)</div>`
    ] },
  { q: ["A car with cash price of P600,000 has down payment of P200,000. If the monthly payment of the car is P6,000, how many years will the car be paid off?"],
    choices: [
      ["7.5"],
      ["9"],
      ["9.2"],
      ["2.7"]
    ], answer: 2,
    topics: ["Ordinary Annuity (Number of Periods)"],
    hints: [
      `<div class="kw-map"><div class="kw-row"><span class="kw-phrase">"cash price less down payment, equal monthly payments, how long"</span><span class="kw-arrow">&rarr;</span><span class="kw-symbol">\\( P=R\\left[\\dfrac{(1+i)^{n}-1}{(1+i)^{n}\\,i}\\right] \\)</span></div></div><span class="problem-type-tag">Ordinary Annuity (Number of Periods)</span>`,
      `<div class="formula-row"><span class="fr-left">\\(\\text{—}\\)</span><span class="fr-center">\\( P=R\\left[\\dfrac{(1+i)^{n}-1}{(1+i)^{n}\\,i}\\right] \\)</span><span class="fr-right">\\(\\text{—}\\)</span></div>`,
      `<div class="hint-formula">\\( P=600000-200000=400000,\\ R=6000,\\ i=\\dfrac{0.12}{12}=0.01 \\)</div>`,
      `<p class="hint-given">Given:</p><div class="formula-grid-3"><div class="formula-block">\\( P=600000-200000=400000 \\)</div><div class="formula-block">\\( R=6000 \\)</div><div class="formula-block">\\( i=\\dfrac{0.12}{12}=0.01 \\)</div></div><div class="formula-block">\\( P=R\\left[\\dfrac{(1+i)^{n}-1}{(1+i)^{n}\\,i}\\right] \\)</div><p class="hint-note">Substitute the given values:</p><div class="formula-block">\\( 400000=6000\\left[\\dfrac{(1.01)^{n}-1}{(1.01)^{n}(0.01)}\\right] \\)</div><p class="hint-note">Solve for the annuity factor:</p><div class="formula-block">\\( \\dfrac{(1.01)^{n}-1}{(1.01)^{n}(0.01)}=\\dfrac{400000}{6000}=66.6667 \\)</div><p class="hint-note">Solve for n:</p><div class="formula-block">\\( n\\approx 110\\ \\text{months} \\)</div><p class="hint-note">Convert to years:</p><div class="formula-block">\\( \\text{years}=\\dfrac{110}{12}\\approx 9.2 \\)</div><p class="hint-note">Note: the problem does not state an interest rate. Without interest the answer would be 400000/6000 = 66.7 months = 5.6 years, which is not among the choices, so the key (C) is matched by assuming 12% compounded monthly, the rate used in this set. With that rate the factor at n = 110 months is 66.53, which is very close to 66.67.</p><div class="hint-answer">Answer: C. 9.2</div>`
    ] },
  { q: ["An amount of P282,511.00 is borrowed in the bank and promised to pay the amount of P50,000 each year for 10 years. What is the interest did charged him from the bank?"],
    choices: [
      ["11%"],
      ["12%"],
      ["13%"],
      ["14%"]
    ], answer: 1,
    topics: ["Ordinary Annuity (Interest Rate)"],
    hints: [
      `<div class="kw-map"><div class="kw-row"><span class="kw-phrase">"borrowed amount, equal yearly payments, find the interest rate"</span><span class="kw-arrow">&rarr;</span><span class="kw-symbol">\\( P=R\\left[\\dfrac{(1+i)^{n}-1}{(1+i)^{n}\\,i}\\right] \\)</span></div></div><span class="problem-type-tag">Ordinary Annuity (Interest Rate)</span>`,
      `<div class="formula-row"><span class="fr-left">\\(\\text{—}\\)</span><span class="fr-center">\\( P=R\\left[\\dfrac{(1+i)^{n}-1}{(1+i)^{n}\\,i}\\right] \\)</span><span class="fr-right">\\(\\text{—}\\)</span></div>`,
      `<div class="hint-formula">\\( P=282511,\\ R=50000,\\ n=10 \\)</div>`,
      `<p class="hint-given">Given:</p><div class="formula-grid-3"><div class="formula-block">\\( P=282511 \\)</div><div class="formula-block">\\( R=50000 \\)</div><div class="formula-block">\\( n=10 \\)</div></div><div class="formula-block">\\( P=R\\left[\\dfrac{(1+i)^{n}-1}{(1+i)^{n}\\,i}\\right] \\)</div><p class="hint-note">Substitute the given values:</p><div class="formula-block">\\( 282511=50000\\left[\\dfrac{(1+i)^{10}-1}{(1+i)^{10}\\,i}\\right] \\)</div><p class="hint-note">Solve for the annuity factor:</p><div class="formula-block">\\( \\dfrac{(1+i)^{10}-1}{(1+i)^{10}\\,i}=\\dfrac{282511}{50000}=5.6502 \\)</div><p class="hint-note">Try i = 0.12:</p><div class="formula-block">\\( \\dfrac{(1.12)^{10}-1}{(1.12)^{10}(0.12)}=5.6502 \\)</div><p class="hint-note">Interest rate:</p><div class="formula-block">\\( i=12\\% \\)</div><div class="hint-answer">Answer: B. 12%</div>`
    ] },
  { q: ["A student borrowed P50,000 at an interest of 18% compounded monthly. He promised to pay the amount at the end of each month for 5 years starting 4 years from now. Find the monthly payment."],
    choices: [
      ["P1466.20"],
      ["P2556.20"],
      ["P4320.20"],
      ["P3219.20"]
    ], answer: 1,
    topics: ["Deferred Annuity (Find the Payment)"],
    hints: [
      `<div class="kw-map"><div class="kw-row"><span class="kw-phrase">"payments for 5 years starting 4 years from now"</span><span class="kw-arrow">&rarr;</span><span class="kw-symbol">\\( P(1+i)^{k}=R\\left[\\dfrac{(1+i)^{n}-1}{(1+i)^{n}\\,i}\\right] \\)</span></div></div><span class="problem-type-tag">Deferred Annuity (Find the Payment)</span>`,
      `<div class="formula-row"><span class="fr-left">\\(\\text{—}\\)</span><span class="fr-center">\\( P(1+i)^{k}=R\\left[\\dfrac{(1+i)^{n}-1}{(1+i)^{n}\\,i}\\right] \\)</span><span class="fr-right">\\(\\text{—}\\)</span></div>`,
      `<div class="hint-formula">\\( P=50000,\\ i=\\dfrac{0.18}{12}=0.015,\\ n=5(12)=60,\\ k=4(12)-1=47 \\)</div>`,
      `<p class="hint-given">Given:</p><div class="formula-grid-4"><div class="formula-block">\\( P=50000 \\)</div><div class="formula-block">\\( i=\\dfrac{0.18}{12}=0.015 \\)</div><div class="formula-block">\\( n=5(12)=60 \\)</div><div class="formula-block">\\( k=4(12)-1=47 \\)</div></div><div class="formula-block">\\( P(1+i)^{k}=R\\left[\\dfrac{(1+i)^{n}-1}{(1+i)^{n}\\,i}\\right] \\)</div><p class="hint-note">The first payment is at the end of month 48, so the annuity value is located one period earlier, at month 47. Move the loan to month 47:</p><div class="formula-block">\\( P(1+i)^{47}=R\\left[\\dfrac{(1+i)^{60}-1}{(1+i)^{60}\\,i}\\right] \\)</div><p class="hint-note">Substitute the given values:</p><div class="formula-block">\\( 50000(1.015)^{47}=R\\left[\\dfrac{(1.015)^{60}-1}{(1.015)^{60}(0.015)}\\right] \\)</div><p class="hint-note">Evaluate each side:</p><div class="formula-block">\\( 100{,}663.96=R(39.3803) \\)</div><p class="hint-note">Solve for R:</p><div class="formula-block">\\( R=\\text{P}2{,}556.20 \\)</div><div class="hint-answer">Answer: B. \\( \\text{P}2556.20 \\)</div>`
    ] },
  { q: ["Mr. Cruz plans to deposits for the education of his 5 years old son, P 500 at the end of each month for 10 years at 12% annual interest compounded monthly. The money that will be available in two years is"],
    choices: [
      ["P 13,120"],
      ["P 14,500"],
      ["P 13,487"],
      ["P 14,628"]
    ], answer: 2,
    topics: ["Ordinary Annuity (Future Worth)"],
    hints: [
      `<div class="kw-map"><div class="kw-row"><span class="kw-phrase">"deposit at the end of each month, money available in two years"</span><span class="kw-arrow">&rarr;</span><span class="kw-symbol">\\( F=R\\left[\\dfrac{(1+i)^{n}-1}{i}\\right] \\)</span></div></div><span class="problem-type-tag">Ordinary Annuity (Future Worth)</span>`,
      `<div class="formula-row"><span class="fr-left">\\(\\text{—}\\)</span><span class="fr-center">\\( F=R\\left[\\dfrac{(1+i)^{n}-1}{i}\\right] \\)</span><span class="fr-right">\\(\\text{—}\\)</span></div>`,
      `<div class="hint-formula">\\( R=500,\\ i=\\dfrac{0.12}{12}=0.01,\\ n=2(12)=24 \\)</div>`,
      `<p class="hint-given">Given:</p><div class="formula-grid-3"><div class="formula-block">\\( R=500 \\)</div><div class="formula-block">\\( i=\\dfrac{0.12}{12}=0.01 \\)</div><div class="formula-block">\\( n=2(12)=24 \\)</div></div><div class="formula-block">\\( F=R\\left[\\dfrac{(1+i)^{n}-1}{i}\\right] \\)</div><p class="hint-note">Only the deposits made within the first two years count. Substitute the given values:</p><div class="formula-block">\\( F=500\\left[\\dfrac{(1+0.01)^{24}-1}{0.01}\\right] \\)</div><p class="hint-note">Evaluate the annuity factor:</p><div class="formula-block">\\( F=500(26.9735) \\)</div><p class="hint-note">Multiply:</p><div class="formula-block">\\( F=\\text{P}13{,}487 \\)</div><div class="hint-answer">Answer: C. \\( \\text{P}13{,}487 \\)</div>`
    ] },
  { q: ["An investment of P 350,000 is made, to be followed by payments of P 200,000 each year for 3 years. What is the annual rate of return on investment for the project?"],
    choices: [
      ["41.7%"],
      ["32.7%"],
      ["57.1%"],
      ["15%"]
    ], answer: 1,
    topics: ["Ordinary Annuity (Interest Rate)"],
    hints: [
      `<div class="kw-map"><div class="kw-row"><span class="kw-phrase">"investment, equal yearly receipts, annual rate of return"</span><span class="kw-arrow">&rarr;</span><span class="kw-symbol">\\( P=R\\left[\\dfrac{(1+i)^{n}-1}{(1+i)^{n}\\,i}\\right] \\)</span></div></div><span class="problem-type-tag">Ordinary Annuity (Interest Rate)</span>`,
      `<div class="formula-row"><span class="fr-left">\\(\\text{—}\\)</span><span class="fr-center">\\( P=R\\left[\\dfrac{(1+i)^{n}-1}{(1+i)^{n}\\,i}\\right] \\)</span><span class="fr-right">\\(\\text{—}\\)</span></div>`,
      `<div class="hint-formula">\\( P=350000,\\ R=200000,\\ n=3 \\)</div>`,
      `<p class="hint-given">Given:</p><div class="formula-grid-3"><div class="formula-block">\\( P=350000 \\)</div><div class="formula-block">\\( R=200000 \\)</div><div class="formula-block">\\( n=3 \\)</div></div><div class="formula-block">\\( P=R\\left[\\dfrac{(1+i)^{n}-1}{(1+i)^{n}\\,i}\\right] \\)</div><p class="hint-note">At the rate of return, the present worth of the receipts equals the investment:</p><div class="formula-block">\\( 350000=200000\\left[\\dfrac{(1+i)^{3}-1}{(1+i)^{3}\\,i}\\right] \\)</div><p class="hint-note">Solve for the annuity factor:</p><div class="formula-block">\\( \\dfrac{(1+i)^{3}-1}{(1+i)^{3}\\,i}=\\dfrac{350000}{200000}=1.75 \\)</div><p class="hint-note">Try i = 0.327:</p><div class="formula-block">\\( \\dfrac{(1.327)^{3}-1}{(1.327)^{3}(0.327)}\\approx 1.75 \\)</div><p class="hint-note">Rate of return:</p><div class="formula-block">\\( i=32.7\\% \\)</div><div class="hint-answer">Answer: B. 32.7%</div>`
    ] },
  { q: ["The president of an engineering firm wishes to give each of his 50 employees a holiday bonus of P 1,000. How much should he invest monthly for a year at 12% nominal interest rate to be able to give that bonus?"],
    choices: [
      ["P 4,170"],
      ["P 3,840"],
      ["P 2,070"],
      ["P 3,940"]
    ], answer: 3,
    topics: ["Sinking Fund"],
    hints: [
      `<div class="kw-map"><div class="kw-row"><span class="kw-phrase">"invest monthly to accumulate a future amount"</span><span class="kw-arrow">&rarr;</span><span class="kw-symbol">\\( A=F\\left[\\dfrac{i}{(1+i)^{n}-1}\\right] \\)</span></div></div><span class="problem-type-tag">Sinking Fund</span>`,
      `<div class="formula-row"><span class="fr-left">\\(\\text{—}\\)</span><span class="fr-center">\\( A=F\\left[\\dfrac{i}{(1+i)^{n}-1}\\right] \\)</span><span class="fr-right">\\(\\text{—}\\)</span></div>`,
      `<div class="hint-formula">\\( F=50(1000)=50000,\\ i=\\dfrac{0.12}{12}=0.01,\\ n=12 \\)</div>`,
      `<p class="hint-given">Given:</p><div class="formula-grid-3"><div class="formula-block">\\( F=50(1000)=50000 \\)</div><div class="formula-block">\\( i=\\dfrac{0.12}{12}=0.01 \\)</div><div class="formula-block">\\( n=12 \\)</div></div><div class="formula-block">\\( A=F\\left[\\dfrac{i}{(1+i)^{n}-1}\\right] \\)</div><p class="hint-note">Substitute the given values:</p><div class="formula-block">\\( A=50000\\left[\\dfrac{0.01}{(1+0.01)^{12}-1}\\right] \\)</div><p class="hint-note">Evaluate the sinking fund factor:</p><div class="formula-block">\\( A=50000(0.078849) \\)</div><p class="hint-note">Multiply:</p><div class="formula-block">\\( A=\\text{P}3{,}942.44 \\)</div><p class="hint-note">Note: the computed value is P3,942.44, and the nearest choice is D (P3,940).</p><div class="hint-answer">Answer: D. \\( \\text{P}3{,}940 \\)</div>`
    ] },
  { q: ["A certain refrigerator is available on an easy installment plan. The down payment is P 3,000 and the installment payments are P 500 each payable at the end of every three months for 3 years. If the interest is 6% compounded quarterly, what is the equivalent cash price of the refrigerator?"],
    choices: [
      ["P 8,453.75"],
      ["P 8,543.75"],
      ["P 8,354.75"],
      ["P 8,375.48"]
    ], answer: 0,
    topics: ["Ordinary Annuity (Present Worth)"],
    hints: [
      `<div class="kw-map"><div class="kw-row"><span class="kw-phrase">"down payment plus equal installments, equivalent cash price"</span><span class="kw-arrow">&rarr;</span><span class="kw-symbol">\\( \\text{Cash price}=\\text{Down payment}+R\\left[\\dfrac{(1+i)^{n}-1}{(1+i)^{n}\\,i}\\right] \\)</span></div></div><span class="problem-type-tag">Ordinary Annuity (Present Worth)</span>`,
      `<div class="formula-row"><span class="fr-left">\\(\\text{—}\\)</span><span class="fr-center">\\( \\text{Cash price}=\\text{Down payment}+R\\left[\\dfrac{(1+i)^{n}-1}{(1+i)^{n}\\,i}\\right] \\)</span><span class="fr-right">\\(\\text{—}\\)</span></div>`,
      `<div class="hint-formula">\\( R=500,\\ i=\\dfrac{0.06}{4}=0.015,\\ n=3(4)=12,\\ \\text{Down payment}=3000 \\)</div>`,
      `<p class="hint-given">Given:</p><div class="formula-grid-4"><div class="formula-block">\\( R=500 \\)</div><div class="formula-block">\\( i=\\dfrac{0.06}{4}=0.015 \\)</div><div class="formula-block">\\( n=3(4)=12 \\)</div><div class="formula-block">\\( \\text{Down payment}=3000 \\)</div></div><div class="formula-block">\\( \\text{Cash price}=\\text{Down payment}+R\\left[\\dfrac{(1+i)^{n}-1}{(1+i)^{n}\\,i}\\right] \\)</div><p class="hint-note">Present worth of the installments:</p><div class="formula-block">\\( P=500\\left[\\dfrac{(1.015)^{12}-1}{(1.015)^{12}(0.015)}\\right] \\)</div><p class="hint-note">Evaluate the annuity factor:</p><div class="formula-block">\\( P=500(10.9075)=5{,}453.75 \\)</div><p class="hint-note">Add the down payment:</p><div class="formula-block">\\( \\text{Cash price}=3000+5453.75 \\)</div><p class="hint-note">Total:</p><div class="formula-block">\\( \\text{Cash price}=\\text{P}8{,}453.75 \\)</div><div class="hint-answer">Answer: A. \\( \\text{P}8{,}453.75 \\)</div>`
    ] },
  { q: ["Find the present value, in pesos, of perpetuity of P 15,000 payable semi-annually if money is worth 8% compounded quarterly."],
    choices: [
      ["372,537"],
      ["374,977"],
      ["373,767"],
      ["371,287"]
    ], answer: 3,
    topics: ["Perpetuity (Present Worth)"],
    hints: [
      `<div class="kw-map"><div class="kw-row"><span class="kw-phrase">"perpetuity payable semi-annually, money compounded quarterly"</span><span class="kw-arrow">&rarr;</span><span class="kw-symbol">\\( P=\\dfrac{R}{i} \\)</span></div></div><span class="problem-type-tag">Perpetuity (Present Worth)</span>`,
      `<div class="formula-row"><span class="fr-left">\\(\\text{—}\\)</span><span class="fr-center">\\( P=\\dfrac{R}{i} \\)</span><span class="fr-right">\\(\\text{—}\\)</span></div>`,
      `<div class="hint-formula">\\( R=15000,\\ i_{q}=\\dfrac{0.08}{4}=0.02 \\)</div>`,
      `<p class="hint-given">Given:</p><div class="formula-block">\\( R=15000 \\)</div><div class="formula-block">\\( i_{q}=\\dfrac{0.08}{4}=0.02 \\)</div><div class="formula-block">\\( P=\\dfrac{R}{i} \\)</div><p class="hint-note">Convert the quarterly rate to the rate per semi-annual period:</p><div class="formula-block">\\( i=(1+0.02)^{2}-1 \\)</div><p class="hint-note">Evaluate:</p><div class="formula-block">\\( i=0.0404 \\)</div><p class="hint-note">Substitute into the perpetuity formula:</p><div class="formula-block">\\( P=\\dfrac{15000}{0.0404} \\)</div><p class="hint-note">Divide:</p><div class="formula-block">\\( P=371{,}287 \\)</div><div class="hint-answer">Answer: D. \\( 371{,}287 \\)</div>`
    ] },
  { q: ["An electric motor has a cash price of P 8,000. It can also be bought on installment basis with a down payment of P 2,000 and periodic equal payments at the end of every 6 months for 5 years. If interest is fixed at 8% compounded semi-annually, find the equal payments to justify the investment or cash price of motor."],
    choices: [
      ["P 793.75"],
      ["P 739.75"],
      ["P 973.75"],
      ["P 379.75"]
    ], answer: 1,
    topics: ["Ordinary Annuity (Find the Payment)"],
    hints: [
      `<div class="kw-map"><div class="kw-row"><span class="kw-phrase">"cash price less down payment, equal payments every 6 months"</span><span class="kw-arrow">&rarr;</span><span class="kw-symbol">\\( P=R\\left[\\dfrac{(1+i)^{n}-1}{(1+i)^{n}\\,i}\\right] \\)</span></div></div><span class="problem-type-tag">Ordinary Annuity (Find the Payment)</span>`,
      `<div class="formula-row"><span class="fr-left">\\(\\text{—}\\)</span><span class="fr-center">\\( P=R\\left[\\dfrac{(1+i)^{n}-1}{(1+i)^{n}\\,i}\\right] \\)</span><span class="fr-right">\\(\\text{—}\\)</span></div>`,
      `<div class="hint-formula">\\( P=8000-2000=6000,\\ i=\\dfrac{0.08}{2}=0.04,\\ n=5(2)=10 \\)</div>`,
      `<p class="hint-given">Given:</p><div class="formula-grid-3"><div class="formula-block">\\( P=8000-2000=6000 \\)</div><div class="formula-block">\\( i=\\dfrac{0.08}{2}=0.04 \\)</div><div class="formula-block">\\( n=5(2)=10 \\)</div></div><div class="formula-block">\\( P=R\\left[\\dfrac{(1+i)^{n}-1}{(1+i)^{n}\\,i}\\right] \\)</div><p class="hint-note">Substitute the given values:</p><div class="formula-block">\\( 6000=R\\left[\\dfrac{(1.04)^{10}-1}{(1.04)^{10}(0.04)}\\right] \\)</div><p class="hint-note">Evaluate the annuity factor:</p><div class="formula-block">\\( 6000=R(8.1109) \\)</div><p class="hint-note">Solve for R:</p><div class="formula-block">\\( R=\\text{P}739.75 \\)</div><div class="hint-answer">Answer: B. \\( \\text{P}739.75 \\)</div>`
    ] },
  { q: ["The VCP Trading Co. set aside P 200,000 each year for expansion. If the fund earns 8% compounded annually, how long will it take before a new building costing P 2,500,000 can be built?"],
    choices: [
      ["10 years"],
      ["8 years"],
      ["9 years"],
      ["12 years"]
    ], answer: 2,
    topics: ["Ordinary Annuity (Number of Periods)"],
    hints: [
      `<div class="kw-map"><div class="kw-row"><span class="kw-phrase">"set aside equal amounts yearly, how long to reach a target amount"</span><span class="kw-arrow">&rarr;</span><span class="kw-symbol">\\( F=R\\left[\\dfrac{(1+i)^{n}-1}{i}\\right] \\)</span></div></div><span class="problem-type-tag">Ordinary Annuity (Number of Periods)</span>`,
      `<div class="formula-row"><span class="fr-left">\\(\\text{—}\\)</span><span class="fr-center">\\( F=R\\left[\\dfrac{(1+i)^{n}-1}{i}\\right] \\)</span><span class="fr-right">\\(\\text{—}\\)</span></div>`,
      `<div class="hint-formula">\\( R=200000,\\ F=2500000,\\ i=0.08 \\)</div>`,
      `<p class="hint-given">Given:</p><div class="formula-grid-3"><div class="formula-block">\\( R=200000 \\)</div><div class="formula-block">\\( F=2500000 \\)</div><div class="formula-block">\\( i=0.08 \\)</div></div><div class="formula-block">\\( F=R\\left[\\dfrac{(1+i)^{n}-1}{i}\\right] \\)</div><p class="hint-note">Substitute the given values:</p><div class="formula-block">\\( 2500000=200000\\left[\\dfrac{(1.08)^{n}-1}{0.08}\\right] \\)</div><p class="hint-note">Solve for the annuity factor:</p><div class="formula-block">\\( \\dfrac{(1.08)^{n}-1}{0.08}=\\dfrac{2500000}{200000}=12.5 \\)</div><p class="hint-note">Solve for the growth factor:</p><div class="formula-block">\\( (1.08)^{n}=1+12.5(0.08)=2 \\)</div><p class="hint-note">Take the logarithm of both sides:</p><div class="formula-block">\\( n=\\dfrac{\\log 2}{\\log 1.08}=9.01 \\)</div><p class="hint-note">Round to a whole year:</p><div class="formula-block">\\( n\\approx 9\\ \\text{years} \\)</div><div class="hint-answer">Answer: C. 9 years</div>`
    ] },
  { q: ["A debt of P 100,000 is to be discharged by ten semi-annual payments, the first to be made 6 months after the loan is given. The debt will be discharged by 5 equal payments each P 10,000 and by 5 other equal payments of such amount, the final payment will liquidate the debt. If interest is 12% compounded semi-annually, what is the amount of the last 5 payments?"],
    choices: [
      ["P 16,386.74"],
      ["P 18,386.74"],
      ["P 22,956.44"],
      ["P 18,584.36"]
    ], answer: 1,
    topics: ["Cash Flow Equivalence"],
    hints: [
      `<div class="kw-map"><div class="kw-row"><span class="kw-phrase">"two sets of 5 payments that together discharge the debt"</span><span class="kw-arrow">&rarr;</span><span class="kw-symbol">\\( \\text{Debt}=PW_{\\text{first 5}}+PW_{\\text{last 5}} \\)</span></div></div><span class="problem-type-tag">Cash Flow Equivalence</span>`,
      `<div class="formula-row"><span class="fr-left">\\(\\text{—}\\)</span><span class="fr-center">\\( \\text{Debt}=PW_{\\text{first 5}}+PW_{\\text{last 5}} \\)</span><span class="fr-right">\\(\\text{—}\\)</span></div>`,
      `<div class="hint-formula">\\( \\text{Debt}=100000,\\ R_{1}=10000,\\ i=\\dfrac{0.12}{2}=0.06 \\)</div>`,
      `<p class="hint-given">Given:</p><div class="formula-grid-3"><div class="formula-block">\\( \\text{Debt}=100000 \\)</div><div class="formula-block">\\( R_{1}=10000 \\)</div><div class="formula-block">\\( i=\\dfrac{0.12}{2}=0.06 \\)</div></div><div class="formula-block">\\( \\text{Debt}=PW_{\\text{first 5}}+PW_{\\text{last 5}} \\)</div><p class="hint-note">Present worth of the first five payments:</p><div class="formula-block">\\( PW_{1}=10000\\left[\\dfrac{(1.06)^{5}-1}{(1.06)^{5}(0.06)}\\right]=42{,}123.64 \\)</div><p class="hint-note">The balance to be covered by the last five payments:</p><div class="formula-block">\\( PW_{2}=100000-42123.64=57876.36 \\)</div><p class="hint-note">The last five payments are at periods 6 to 10, so their present worth is the annuity discounted 5 periods:</p><div class="formula-block">\\( PW_{2}=R_{2}\\left[\\dfrac{(1.06)^{5}-1}{(1.06)^{5}(0.06)}\\right](1.06)^{-5} \\)</div><p class="hint-note">Substitute the values:</p><div class="formula-block">\\( 57876.36=R_{2}(4.2124)(0.74726) \\)</div><p class="hint-note">Solve for R:</p><div class="formula-block">\\( R_{2}=\\text{P}18{,}386.74 \\)</div><div class="hint-answer">Answer: B. \\( \\text{P}18{,}386.74 \\)</div>`
    ] },
  { q: ["An employee obtained a loan of P 10,000 at the rate of 6% compounded annually in order to build a house. How much must he pay monthly to amortize the loan within a period of 10 years?"],
    choices: [
      ["P 120.25"],
      ["P 105.25"],
      ["P 108.22"],
      ["P 110.22"]
    ], answer: 3,
    topics: ["Ordinary Annuity (Find the Payment)"],
    hints: [
      `<div class="kw-map"><div class="kw-row"><span class="kw-phrase">"annual rate, monthly payments, amortize the loan"</span><span class="kw-arrow">&rarr;</span><span class="kw-symbol">\\( P=R\\left[\\dfrac{(1+i)^{n}-1}{(1+i)^{n}\\,i}\\right] \\)</span></div></div><span class="problem-type-tag">Ordinary Annuity (Find the Payment)</span>`,
      `<div class="formula-row"><span class="fr-left">\\(\\text{—}\\)</span><span class="fr-center">\\( P=R\\left[\\dfrac{(1+i)^{n}-1}{(1+i)^{n}\\,i}\\right] \\)</span><span class="fr-right">\\(\\text{—}\\)</span></div>`,
      `<div class="hint-formula">\\( P=10000,\\ i=(1.06)^{1/12}-1=0.0048676,\\ n=10(12)=120 \\)</div>`,
      `<p class="hint-given">Given:</p><div class="formula-block">\\( P=10000 \\)</div><div class="formula-block">\\( i=(1.06)^{1/12}-1=0.0048676 \\)</div><div class="formula-block">\\( n=10(12)=120 \\)</div><div class="formula-block">\\( P=R\\left[\\dfrac{(1+i)^{n}-1}{(1+i)^{n}\\,i}\\right] \\)</div><p class="hint-note">Substitute the given values:</p><div class="formula-block">\\( 10000=R\\left[\\dfrac{(1.0048676)^{120}-1}{(1.0048676)^{120}(0.0048676)}\\right] \\)</div><p class="hint-note">Evaluate the annuity factor:</p><div class="formula-block">\\( 10000=R(90.7243) \\)</div><p class="hint-note">Solve for R:</p><div class="formula-block">\\( R=\\text{P}110.22 \\)</div><p class="hint-note">Note: the rate is compounded annually, so the monthly rate is the equivalent effective rate. Using 6%/12 = 0.5% instead gives P111.02, which is not a choice.</p><div class="hint-answer">Answer: D. \\( \\text{P}110.22 \\)</div>`
    ] },
];
