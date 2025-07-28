document.querySelector('.cart').addEventListener('click', function (e) {
    const button = e.currentTarget;
  
    // Create the ripple element
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
  
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
    ripple.className = 'ripple';
  
    // Append the ripple to the button
    button.appendChild(ripple);
  
    // Remove the ripple after the animation
    ripple.addEventListener('animationend', () => {
        ripple.remove();
    });
});

document.querySelector('#soldout').addEventListener('click', function (e) {
    const button = e.currentTarget;
  
    // Prevent the default action (if any)
    e.preventDefault();
  
    // Show the "Item Sold Out" message
    const messageDiv = document.querySelector('#soldOutMessage');
    messageDiv.classList.remove = 'soldout';
    
   console.log('sold out button is working!')
    messageDiv.style.display = 'block'
   
   // Make the message visible
   setTimeout(() => {
    messageDiv.style.display = 'none' // Hide after 1 seconds
    }, 1000)
   
    })



 
