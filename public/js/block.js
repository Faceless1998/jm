        document.addEventListener('DOMContentLoaded', function () {
            const tooltip = document.createElement('div');
            tooltip.classList.add('tooltip');
            document.body.appendChild(tooltip);
    
            const floors = document.querySelectorAll('path[data-tooltip]');
    
            floors.forEach(floor => {
                floor.addEventListener('mouseenter', function (event) {
                    const tooltipText = floor.getAttribute('data-tooltip');
                    tooltip.textContent = tooltipText;
    
                    // Show the tooltip
                    tooltip.style.opacity = 1;
                    
                    // Adjust the position of the tooltip
                    let tooltipX = event.pageX + 10;
                    let tooltipY = event.pageY + 10;
    
                    tooltip.style.left = `${tooltipX}px`;
                    tooltip.style.top = `${tooltipY}px`;
                });
    
                floor.addEventListener('mousemove', function (event) {
                    // Adjust position during mouse movement
                    let tooltipX = event.pageX + 10;
                    let tooltipY = event.pageY + 10;
                    tooltip.style.left = `${tooltipX}px`;
                    tooltip.style.top = `${tooltipY}px`;
                });
    
                floor.addEventListener('mouseleave', function () {
                    // Hide the tooltip when mouse leaves the element
                    tooltip.style.opacity = 0;
                });
            });
        });
