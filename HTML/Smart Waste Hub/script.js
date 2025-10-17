// Wait for the entire HTML document to be loaded before running the script
document.addEventListener('DOMContentLoaded', function() {

    const sections = {
        'dashboard': 'dashboard-section',
        'route-opt': 'route-opt-section',
        'reporting': 'reporting-portal-section',
        'citizen-hub': 'citizen-hub-section'
    };

    let binData = [
        { id: 'B-001', location: 'Main Market Square', fill: 95, status: 'Critical' },
        { id: 'B-002', location: 'Residential Block C', fill: 78, status: 'High' },
        { id: 'B-003', location: 'City Park North Gate', fill: 30, status: 'Low' },
        { id: 'B-004', location: 'Industrial Zone', fill: 85, status: 'Critical' },
        { id: 'B-005', location: 'School Road', fill: 62, status: 'Medium' }
    ];
    
    let reportData = [
        { id: 101, type: 'Illegal Dumping/Overflowing Bin', location: 'Near Sector 5 Park', notes: 'Large pile of construction debris.', status: 'Open', date: new Date().toLocaleTimeString() },
        { id: 102, type: 'E-Waste', location: 'House No. 45, Gandhi Street', notes: 'Old monitor and printer ready for pickup.', status: 'Open', date: new Date().toLocaleTimeString() }
    ];

    // --- Utility Functions ---

    function showMessage(message, type = 'success') {
        const box = document.getElementById('message-box');
        box.textContent = message;
        box.style.display = 'block';
        box.classList.remove('translate-x-full');

        let bgColor = 'bg-green-800';
        if (type === 'error') bgColor = 'bg-red-800';
        if (type === 'info') bgColor = 'bg-blue-800';

        // Important: Remove old color classes before adding new one
        box.classList.remove('bg-green-800', 'bg-red-800', 'bg-blue-800');
        box.classList.add(bgColor);

        setTimeout(() => {
            box.classList.add('translate-x-full');
            // Optional: hide after transition
            // setTimeout(() => box.style.display = 'none', 300); 
        }, 3000);
    }
    
    function updateBinList() {
        const binListContainer = document.getElementById('bin-list');
        if (!binListContainer) return; // safety check
        binListContainer.innerHTML = '';
        let criticalCount = 0;

        binData.forEach(bin => {
            if (bin.fill > 80) {
                criticalCount++;
            }

            let fillClass;
            if (bin.fill > 80) fillClass = 'bg-red-500';
            else if (bin.fill > 50) fillClass = 'bg-yellow-500';
            else fillClass = 'bg-green-500';

            const binElement = `
                <div class="flex items-center justify-between p-3 bg-gray-800 rounded-md">
                    <div class="flex-1">
                        <p class="font-medium text-white">${bin.id} - ${bin.location}</p>
                        <p class="text-xs text-gray-500">${bin.status}</p>
                    </div>
                    <div class="w-1/3 ml-4">
                        <div class="h-2 w-full bg-gray-700 rounded-full">
                            <div class="fill-bar h-2 rounded-full ${fillClass}" style="width: ${bin.fill}%"></div>
                        </div>
                    </div>
                    <p class="w-12 text-right font-bold text-sm">${bin.fill}%</p>
                </div>
            `;
            binListContainer.innerHTML += binElement;
        });
        
        document.getElementById('critical-bins').textContent = criticalCount;
        document.getElementById('last-update').textContent = new Date().toLocaleTimeString();
    }
    
    // --- Reporting Portal Functionality ---

    function updateReportingPortal() {
        const issueListContainer = document.getElementById('issue-list');
        const noReportsMsg = document.getElementById('no-reports-msg');
        const openReportsCount = document.getElementById('open-reports');
        const reportCount = document.getElementById('report-count');

        if (!issueListContainer) return; // safety check

        issueListContainer.innerHTML = '';
        
        const openReports = reportData.filter(report => report.status === 'Open');
        openReportsCount.textContent = openReports.length;
        reportCount.textContent = openReports.length;
        
        if (openReports.length === 0) {
            noReportsMsg.classList.remove('hidden');
            // We need to add back the original message if it was removed
            issueListContainer.innerHTML = '<p id="no-reports-msg" class="text-gray-500">No open reports. All clear!</p>';
            return;
        } else {
             // Hide the default message if it exists
            const existingNoReportsMsg = issueListContainer.querySelector('#no-reports-msg');
            if (existingNoReportsMsg) existingNoReportsMsg.classList.add('hidden');
        }

        openReports.forEach(report => {
            const reportElement = `
                <div id="report-${report.id}" class="card p-4 border-l-4 border-red-500 bg-gray-800 flex justify-between items-center transition duration-200 hover:bg-gray-700">
                    <div class="flex-1 space-y-1">
                        <p class="font-semibold text-lg text-red-300">${report.type}</p>
                        <p class="text-sm text-gray-400">Location: ${report.location} (${report.date})</p>
                        <p class="text-sm text-gray-500 italic">Notes: ${report.notes}</p>
                    </div>
                    <button onclick="closeReport(${report.id})" class="btn-primary px-3 py-1.5 ml-4 text-sm whitespace-nowrap">
                        Mark Resolved
                    </button>
                </div>
            `;
            issueListContainer.innerHTML += reportElement;
        });
    }

    // --- Global Scope For Onclick Handlers ---
    // Make functions available on the window object so inline onclick handlers can find them
    
    window.showSection = function(id) {
        Object.values(sections).forEach(sectionId => {
            document.getElementById(sectionId)?.classList.add('hidden');
        });
        
        document.querySelectorAll('.tab-button').forEach(btn => {
            btn.classList.remove('active', 'text-gray-200');
            btn.classList.add('text-gray-400');
        });

        document.getElementById(sections[id])?.classList.remove('hidden');
        
        const activeButton = document.querySelector(`.tab-button[onclick*="'${id}'"]`);
        activeButton?.classList.add('active', 'text-gray-200');
        activeButton?.classList.remove('text-gray-400');

        if (id === 'dashboard') {
            updateBinList();
        } else if (id === 'reporting') {
            updateReportingPortal();
        }
    }

    window.closeReport = function(id) {
        const reportIndex = reportData.findIndex(r => r.id === id);
        if (reportIndex !== -1) {
            reportData[reportIndex].status = 'Resolved';
            showMessage(`Report #${id} marked as Resolved!`, 'success');
            updateReportingPortal(); // Refresh the list
        }
    }

    window.simulateLogin = function() {
        const loginInput = document.querySelector('#login-section input').value.trim();
        if (loginInput === '') {
            showMessage("Please enter a User/Operator ID.", 'info');
            return;
        }

        document.getElementById('login-section').classList.add('hidden');
        // No need to remove hidden from dashboard here, showSection will handle it.
        showMessage(`Welcome, ${loginInput}! You have successfully logged in.`, 'success');
        showSection('dashboard'); // This will show the correct section and update data
        
        setInterval(function() {
            binData = binData.map(bin => {
                if (Math.random() < 0.4) {
                    const delta = Math.floor(Math.random() * 5) - 2;
                    bin.fill = Math.min(100, Math.max(0, bin.fill + delta));
                    if (bin.fill >= 80) bin.status = 'Critical';
                    else if (bin.fill >= 50) bin.status = 'High';
                    else bin.status = 'Low';
                }
                return bin;
            });
            // Only update the list if the dashboard is the active section
            if (!document.getElementById('dashboard-section').classList.contains('hidden')) {
                updateBinList();
            }
        }, 5000);
    }

    window.calculateRoute = function() {
        const truckId = document.getElementById('truck-id').value;
        const startLoc = document.getElementById('start-location').value;
        const routeOutput = document.getElementById('route-output');
        const routeDetails = document.getElementById('route-details');

        routeOutput.classList.remove('hidden');
        routeDetails.innerHTML = 'Calculating optimal route using AI...';
        
        showMessage(`Calculating route for ${truckId}...`, 'info');

        setTimeout(() => {
            const stops = binData.filter(b => b.fill > 50).map(b => b.location);
            if (stops.length === 0) {
                routeDetails.innerHTML = `No critical bins found. Truck ${truckId} can remain idle. Estimated Cost Savings: 100%`;
            } else {
                const stopList = stops.join(' &rarr; ');
                routeDetails.innerHTML = `
                    <strong>Start:</strong> ${startLoc} <br>
                    <strong>Optimized Path:</strong> ${stopList} <br>
                    <strong>Stops:</strong> ${stops.length} <br>
                    <strong>Estimated Fuel Saved:</strong> 72% (vs manual route) <br>
                    <strong>ETA:</strong> 4 hours
                `;
            }
            showMessage(`Route generated successfully for ${truckId}.`, 'success');

        }, 2500);
    }

    window.reportWaste = function() {
        const wasteType = document.getElementById('garbage-type').value;
        const location = document.getElementById('citizen-location').value;
        const notes = document.getElementById('notes').value;
        const pointsElement = document.getElementById('reward-points');
        let currentPoints = parseInt(pointsElement.textContent.replace(/,/g, ''));

        if (wasteType === 'Select Garbage Type' || location.trim() === '') {
            showMessage("Please select the waste type and enter your location.", 'error');
            return;
        }
        
        let pointsEarned = 100;
        if (wasteType === 'E-Waste' || wasteType === 'Illegal Dumping/Overflowing Bin') {
            pointsEarned = 250;
        }

        setTimeout(() => {
            currentPoints += pointsEarned;
            pointsElement.textContent = currentPoints.toLocaleString();

            if (wasteType === 'Illegal Dumping/Overflowing Bin' || wasteType === 'E-Waste') {
                const newReport = {
                    id: Math.max(...reportData.map(r => r.id), 100) + 1,
                    type: wasteType,
                    location: location,
                    notes: notes || 'No specific notes provided.',
                    status: 'Open',
                    date: new Date().toLocaleTimeString()
                };
                reportData.push(newReport);
            }

            document.getElementById('citizen-location').value = '';
            document.getElementById('notes').value = '';
            document.getElementById('garbage-type').selectedIndex = 0;

            showMessage(`Report submitted! You earned ${pointsEarned} points.`, 'success');
        }, 1000);
    }

});