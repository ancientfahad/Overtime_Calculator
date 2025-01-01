function calculateWages() {
    const monthlySalary = parseFloat(document.getElementById('monthlySalary').value);
    const workingDays = parseInt(document.getElementById('workingDays').value);
    const otHours = parseInt(document.getElementById('otHours').value);

    if (isNaN(monthlySalary) || isNaN(workingDays) || isNaN(otHours)) {
        alert('Please enter valid numbers in all fields.');
        return;
    }

    const yearlySalary = monthlySalary * 12;
    const dailyWage = yearlySalary / workingDays;
    const hourlyWage = dailyWage / 8;
    const otWage = hourlyWage * 2;
    const otPayment = otHours * otWage;

    document.getElementById('dailyWage').textContent = `Daily Wage: BDT ${dailyWage.toFixed(2)}`;
    document.getElementById('hourlyWage').textContent = `Hourly Wage: BDT ${hourlyWage.toFixed(2)}`;
    document.getElementById('otWage').textContent = `OT Wage: BDT ${otWage.toFixed(2)}`;
    document.getElementById('otPayment').textContent = `Overtime Payment: BDT ${otPayment.toFixed(2)}`;
}