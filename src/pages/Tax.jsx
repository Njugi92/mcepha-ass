import React, { useState, useEffect } from "react";
import "./Tax.css";

const Tax = () => {
  const [income, setIncome] = useState("");
  const [deductions, setDeductions] = useState({
    nssfMonthly: null,
    nssfAnnual: null,
    nhifMonthly: null,
    nhifAnnual: null,
    payeMonthly: null,
    payeAnnual: null,
    houseLevyMonthly: null,
    houseLevyAnnual: null,
    totalMonthly: null,
    totalAnnual: null,
  });

  useEffect(() => {
    const handleScroll = () => {
      const titleElement = document.querySelector(".tax-heading");
      if (titleElement) {
        const scrollPosition = window.scrollY;
        const titleHeight = titleElement.getBoundingClientRect().height;

        if (scrollPosition <= titleHeight) {
          titleElement.style.transform = `translateY(${scrollPosition}px)`;
        } else {
          titleElement.style.transform = `translateY(${titleHeight}px)`;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const calculateTax = () => {
    const incomeValue = parseFloat(income);
    if (isNaN(incomeValue)) {
      alert("Please enter a valid number.");
      return;
    }

    // Kenyan tax calculations
    const nssfMonthly = 200; // NSSF flat rate
    const nhifMonthly = incomeValue * 0.025; // NHIF 2.5%
    const payeMonthly = incomeValue > 24000 ? (incomeValue - 24000) * 0.1 : 0; // PAYE 10% on income above KES 24,000
    const houseLevyMonthly = incomeValue * 0.015; // House Levy 1.5%

    const nssfAnnual = nssfMonthly * 12;
    const nhifAnnual = nhifMonthly * 12;
    const payeAnnual = payeMonthly * 12;
    const houseLevyAnnual = houseLevyMonthly * 12;

    const totalMonthly =
      nssfMonthly + nhifMonthly + payeMonthly + houseLevyMonthly;
    const totalAnnual = totalMonthly * 12;

    setDeductions({
      nssfMonthly,
      nssfAnnual,
      nhifMonthly,
      nhifAnnual,
      payeMonthly,
      payeAnnual,
      houseLevyMonthly,
      houseLevyAnnual,
      totalMonthly,
      totalAnnual,
    });
  };

  const handleFileReturns = () => {
    window.open("https://www.kra.go.ke/en/services/file-tax-returns", "_blank");
  };

  return (
    <section className="tax-wrapper">
      <div className="tax-heading-container">
        <h1 className="tax-heading">Tax Calculation</h1>
      </div>
      <div className="inner-width">
        <div className="tax-content">
          <div className="tax-info">
            <p>
              Understanding your tax obligations is crucial for proper financial
              planning. Use our tax calculator to determine your monthly and
              annual tax liabilities based on your income.
            </p>
            <img
              src="./tax-image.jpg"
              alt="Tax Planning"
              className="tax-image"
            />
          </div>
          <div className="tax-calculator">
            <img
              src="/mcephalogo.png"
              alt="Mcepha & Associates Logo"
              className="logo"
            />
            <p className="income-prompt">
              <strong>Please enter your monthly income:</strong>
            </p>
            <input
              type="text"
              placeholder="Enter your income in KES"
              value={income}
              onChange={(e) => setIncome(e.target.value)}
            />
            <button onClick={calculateTax}>Calculate Tax</button>
            {deductions.totalMonthly !== null && (
              <div className="tax-results">
                <div className="deduction-item">
                  <p>
                    <strong>NSSF Monthly:</strong> KES{" "}
                    {deductions.nssfMonthly.toFixed(2)}
                  </p>
                  <p>
                    <strong>NSSF Annual:</strong> KES{" "}
                    {deductions.nssfAnnual.toFixed(2)}
                  </p>
                </div>
                <div className="deduction-item">
                  <p>
                    <strong>NHIF Monthly:</strong> KES{" "}
                    {deductions.nhifMonthly.toFixed(2)}
                  </p>
                  <p>
                    <strong>NHIF Annual:</strong> KES{" "}
                    {deductions.nhifAnnual.toFixed(2)}
                  </p>
                </div>
                <div className="deduction-item">
                  <p>
                    <strong>PAYE Monthly:</strong> KES{" "}
                    {deductions.payeMonthly.toFixed(2)}
                  </p>
                  <p>
                    <strong>PAYE Annual:</strong> KES{" "}
                    {deductions.payeAnnual.toFixed(2)}
                  </p>
                </div>
                <div className="deduction-item">
                  <p>
                    <strong>House Levy Monthly:</strong> KES{" "}
                    {deductions.houseLevyMonthly.toFixed(2)}
                  </p>
                  <p>
                    <strong>House Levy Annual:</strong> KES{" "}
                    {deductions.houseLevyAnnual.toFixed(2)}
                  </p>
                </div>
                <div className="deduction-item">
                  <p>
                    <strong>Total Monthly Deductions:</strong> KES{" "}
                    {deductions.totalMonthly.toFixed(2)}
                  </p>
                  <p>
                    <strong>Total Annual Deductions:</strong> KES{" "}
                    {deductions.totalAnnual.toFixed(2)}
                  </p>
                </div>
                <button
                  className="file-returns-button"
                  onClick={handleFileReturns}
                >
                  File Returns Now
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tax;
