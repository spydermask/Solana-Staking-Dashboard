// Example JavaScript to fetch staking data (replace with actual data fetching logic)
document.addEventListener("DOMContentLoaded", function() {
    const stakingData = [
        { validator: 'Validator A', stake: '50,000 SOL', performance: '95%' },
        { validator: 'Validator B', stake: '45,000 SOL', performance: '90%' },
        { validator: 'Validator C', stake: '40,000 SOL', performance: '88%' }
    ];

    const stakingContainer = document.getElementById('staking-data');
    
    stakingData.forEach(data => {
        const div = document.createElement('div');
        div.classList.add('stake-item');
        div.innerHTML = `<h2>${data.validator}</h2><p>Stake: ${data.stake}</p><p>Performance: ${data.performance}</p>`;
        stakingContainer.appendChild(div);
    });
});