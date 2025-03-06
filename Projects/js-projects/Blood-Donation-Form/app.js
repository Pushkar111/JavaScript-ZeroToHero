document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('donationForm');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let isValid = true;

        const name = document.getElementById('name').value;
        const age = document.getElementById('age').value;
        const bloodGroup = document.getElementById('bloodGroup').value;
        const gender = document.getElementById('gender').value;
        const weight = document.getElementById('weight').value;
        const disease = document.getElementById('disease').value;

        const nameError = document.getElementById('nameError');
        const ageError = document.getElementById('ageError');
        const bloodGroupError = document.getElementById('bloodGroupError');
        const genderError = document.getElementById('genderError');
        const weightError = document.getElementById('weightError');

        // Reset error messages
        nameError.style.display = 'none';
        ageError.style.display = 'none';
        bloodGroupError.style.display = 'none';
        genderError.style.display = 'none';
        weightError.style.display = 'none';

        // Validate name
        if (name.trim() === '') {
            nameError.innerText = 'Name is required';
            nameError.style.display = 'block';
            isValid = false;
        }

        // Validate age
        if (age.trim() === '' || isNaN(age) || age < 18 || age > 65) {
            ageError.innerText = 'Valid age is required (18-65)';
            ageError.style.display = 'block';
            isValid = false;
        }

        // Validate blood group
        const validBloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
        if (!validBloodGroups.includes(bloodGroup.toUpperCase())) {
            bloodGroupError.innerText = 'Valid blood group is required';
            bloodGroupError.style.display = 'block';
            isValid = false;
        }

        // Validate gender
        if (gender.trim() === '') {
            genderError.innerText = 'Gender is required';
            genderError.style.display = 'block';
            isValid = false;
        }

        // Validate weight
        if (weight.trim() === '' || isNaN(weight) || weight < 45) {
            weightError.innerText = 'Valid weight is required (minimum 45 kg)';
            weightError.style.display = 'block';
            isValid = false;
        }

        if (isValid) {
            alert(`Form submitted successfully!\n\nDonor Name: ${name}\nDonor Age: ${age}\nBlood Group: ${bloodGroup}\nGender: ${gender}\nWeight: ${weight} kg\nDisease: ${disease}`);
            form.reset();
        }
    });
});