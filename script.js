// Show loading screen initially
const loadingScreen = document.getElementById('loading-screen');
const container = document.querySelector('.container');

// After 5 seconds, hide loading screen and show main content
setTimeout(() => {
    loadingScreen.style.display = 'none';
    container.classList.remove('hidden');
}, 5000);

// Countdown Logic
let countdown = 5;
const countdownElement = document.getElementById('countdown');

const countdownInterval = setInterval(() => {
    countdown--;
    countdownElement.textContent = countdown;

    if (countdown <= 0) {
        clearInterval(countdownInterval);
        countdownElement.textContent = "Hacked!";
        alert("You are just hacked! Happy Valentine's Day!");
    }
}, 1000);

// Share on WhatsApp
document.getElementById('share-whatsapp').addEventListener('click', () => {
    const shareUrl = `https://api.whatsapp.com/send?text=Check%20out%20this%20awesome%20Valentine's%20Day%20surprise!%20${window.location.href}`;
    window.open(shareUrl, '_blank');
});

// Share on Instagram
document.getElementById('share-instagram').addEventListener('click', () => {
    const shareUrl = `https://www.instagram.com/`;
    alert("To share on Instagram, copy the link and post it in your story or feed!");
    window.open(shareUrl, '_blank');
});

// System Info Logic
const infoButton = document.getElementById('info-button');
const systemInfo = document.getElementById('system-info');
const infoGrid = document.getElementById('info-grid');

infoButton.addEventListener('click', async () => {
    // Fetch IP Address
    let ipAddress = "Unable to fetch IP";
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        ipAddress = data.ip;
    } catch (error) {
        console.error("Error fetching IP:", error);
    }

    // Gather System Information
    const userAgent = navigator.userAgent;
    const os = getOS(userAgent);
    const browser = getBrowser(userAgent);
    const screenResolution = `${window.screen.width}x${window.screen.height}`;
    const deviceType = /Mobi|Android/i.test(navigator.userAgent) ? "Mobile" : "Desktop";
    const cpuCores = navigator.hardwareConcurrency || "Unknown";
    const language = navigator.language || "Unknown";
    const onlineStatus = navigator.onLine ? "Online" : "Offline";
    const batteryInfo = await getBatteryInfo();
    const memory = navigator.deviceMemory || "Unknown";
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const cookiesEnabled = navigator.cookieEnabled ? "Enabled" : "Disabled";
    const doNotTrack = navigator.doNotTrack || "Unknown";
    const platform = navigator.platform || "Unknown";
    const vendor = navigator.vendor || "Unknown";
    const maxTouchPoints = navigator.maxTouchPoints || "Unknown";
    const connection = navigator.connection ? getConnectionInfo(navigator.connection) : "Unknown";
    const webGLRenderer = getWebGLRenderer();
    const colorDepth = window.screen.colorDepth;
    const pixelRatio = window.devicePixelRatio;

    // Display System Information
    infoGrid.innerHTML = `
        <p><strong>IP Address:</strong> ${ipAddress}</p>
        <p><strong>Operating System:</strong> ${os}</p>
        <p><strong>Browser:</strong> ${browser}</p>
        <p><strong>Screen Resolution:</strong> ${screenResolution}</p>
        <p><strong>Device Type:</strong> ${deviceType}</p>
        <p><strong>CPU Cores:</strong> ${cpuCores}</p>
        <p><strong>Language:</strong> ${language}</p>
        <p><strong>Online Status:</strong> ${onlineStatus}</p>
        <p><strong>Battery Status:</strong> ${batteryInfo}</p>
        <p><strong>Device Memory (GB):</strong> ${memory}</p>
        <p><strong>Timezone:</strong> ${timezone}</p>
        <p><strong>Cookies Enabled:</strong> ${cookiesEnabled}</p>
        <p><strong>Do Not Track:</strong> ${doNotTrack}</p>
        <p><strong>Platform:</strong> ${platform}</p>
        <p><strong>Vendor:</strong> ${vendor}</p>
        <p><strong>Max Touch Points:</strong> ${maxTouchPoints}</p>
        <p><strong>Connection:</strong> ${connection}</p>
        <p><strong>WebGL Renderer:</strong> ${webGLRenderer}</p>
        <p><strong>Color Depth:</strong> ${colorDepth}</p>
        <p><strong>Pixel Ratio:</strong> ${pixelRatio}</p>
    `;

    // Show System Info
    systemInfo.classList.remove('hidden');
});

// Helper Functions
function getOS(userAgent) {
    if (/Windows/i.test(userAgent)) return "Windows";
    if (/Mac/i.test(userAgent)) return "MacOS";
    if (/Linux/i.test(userAgent)) return "Linux";
    if (/Android/i.test(userAgent)) return "Android";
    if (/iOS/i.test(userAgent)) return "iOS";
    return "Unknown";
}

function getBrowser(userAgent) {
    if (/Firefox/i.test(userAgent)) return "Firefox";
    if (/Chrome/i.test(userAgent)) return "Chrome";
    if (/Safari/i.test(userAgent)) return "Safari";
    if (/Edge/i.test(userAgent)) return "Edge";
    return "Unknown";
}

async function getBatteryInfo() {
    if ('getBattery' in navigator) {
        const battery = await navigator.getBattery();
        return `Level: ${Math.round(battery.level * 100)}%, Charging: ${battery.charging}`;
    }
    return "Not Supported";
}

function getConnectionInfo(connection) {
    return `Type: ${connection.effectiveType}, Downlink: ${connection.downlink}Mbps, RTT: ${connection.rtt}ms`;
}

function getWebGLRenderer() {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) return "Not Supported";
    const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
    return debugInfo ? gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) : "Unknown";
}
