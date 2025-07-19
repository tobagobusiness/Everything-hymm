const products = [
  {
    sku: "A1",
    features: ["APP Control", "10 Vibration Modes", "USB Pin Charging", "Rose Red/Purple"],
    price: "$5.50"
  },
  {
    sku: "G1",
    features: ["3 in 1 Patting Vibrator", "7 Patting Modes + 7 Vibration Modes + 7 Vibration Modes", "USB Magnetic Charging"],
    price: "$10.90"
  },
  {
    sku: "A2",
    features: ["10 Tougue Licking Modes", "USB Magnetic Charging", "Red"],
    price: "$6.00"
  },
  {
    sku: "G2",
    features: ["Red/Purple", "3 in 1 Patting Vibrator", "10 Patting Modes + 10 Sucking Modes + 10 Vibration Modes", "USB Magnetic Charging"],
    price: "$10.90"
  },
  {
    sku: "A3",
    features: ["5 vibration absorption modes + 10 vibration modes", "USB magnetic charge", "No color specified"],
    price: "$13.90"
  },
  {
    sku: "G3",
    features: ["Red/Purple", "10 Bitting Modes + 10 Wigging & Vibration Modes", "USB Magnetic Charging", "Red"],
    price: "$18.80"
  },
  {
    sku: "A4",
    features: ["Red/black/green/purple", "10 sucking modes", "USB magnetic charge", "Red/pink"],
    price: "$4.60"
  },
  {
    sku: "G4",
    features: ["10 Bitting Modes + 10 Patting Vibration Modes", "USB Magnetic Charging", "Red"],
    price: "$12.90"
  },
  {
    sku: "A5",
    features: ["10 Tougue Licking Modes + Thrusting Vibration Modes", "USB Magnetic Charging", "Red"],
    price: "$7.90"
  },
  {
    sku: "G5",
    features: ["10 Sucking Modes + Thrusting Vibration Modes", "USB Magnetic Charging", "Red"],
    price: "$7.90"
  },
  {
    sku: "G6",
    features: ["10 Bitting Modes + 10 Patting Vibration Modes", "USB Magnetic Charging", "Red"],
    price: "$7.90"
  },
  {
    sku: "G7",
    features: ["10 Bitting Modes + 10 Patting Vibration Modes", "USB Magnetic Charging", "Red/Purple"],
    price: "$17.80"
  },
  {
    sku: "G8",
    features: ["5 vibration absorption modes /10 vibration modes", "USB magnetic charge", "Red"],
    price: "$6.90"
  },
  {
    sku: "G9",
    features: ["10 vibration/suction", "USB magnetic charge", "Pink/green"],
    price: "$13.90"
  },
  {
    sku: "G10",
    features: ["9 Frequency Roll Licking+ 9 Telescopic Modess", "Heating", "USB Magnetic Charging", "Pink/Green/Purple"],
    price: "$9.70"
  },
  {
    sku: "G11",
    features: ["5 Vibration Modes+5-frequency Telescopic", "Heating", "USB Magnetic Charging", "Green/Pink"],
    price: "$11.80"
  },
  {
    sku: "G12",
    features: ["Mode :10 frequency vibration", "Power :USB charging", "Color: Black"],
    price: "$10.50"
  },
  {
    sku: "G13",
    features: ["Mode :10 frequency vibration", "Power :USB charging", "Color: Black/brown/green"],
    price: "$11.80"
  },
  {
    sku: "G14",
    features: ["Mode :Sucking/G-spot vibration", "Power :USB charging", "Color: pink/red/black/purple"],
    price: "$11.80"
  },
  {
    sku: "G15",
    features: ["Mode: delayed ejaculation", "Color: black"],
    price: "$1.65"
  },
  {
    sku: "G16",
    features: ["Mode: Vibration/locking/delayed ejaculation", "Power supply: battery", "Color: Black"],
    price: "$2.90"
  },
  {
    sku: "G17",
    features: ["Mode :10 rotation modes/voices", "Power supply :USB magnetic charge", "Color: White"],
    price: "$13.60"
  },
  {
    sku: "G18",
    features: ["Modes: 360° Rotation Modes", "Power: USB Pin Charging", "Colors: Black"],
    price: "$10.70"
  },
  {
    sku: "G19",
    features: ["Mode :7 shock /4 absorption /3 languages", "Power :USB charging", "Color: Black"],
    price: "$20.20"
  },
  {
    sku: "G20",
    features: ["Mode: Stretch/vibrate/suck", "Power supply mode :USB magnetic charge", "Color: Black"],
    price: "$23.60"
  },
  {
    sku: "G21",
    features: ["Mode: Sucking/g point vibration", "Power supply: battery", "Color: pink/red/black/purple/colorful"],
    price: "$16.70"
  },
  {
    sku: "G22",
    features: ["Mode :10 vibration modes/rear court", "Power supply :USB magnetic charge", "Color: Red/purple"],
    price: "$10.80"
  },
  {
    sku: "G23",
    features: ["Mode :10 vibration modes", "Power supply :USB magnetic charge", "Color: Pink/rose/white/purple"],
    price: "$2.60"
  },
  {
    sku: "G24",
    features: ["Mode :10 vibration modes", "Power supply :USB magnetic charge", "Color: Green/pink"],
    price: "$5.80"
  },
  {
    sku: "G25",
    features: ["Mode :10 vibration modes", "Power supply :USB charging", "Color: Purple"],
    price: "$7.30"
  },
  {
    sku: "G26",
    features: ["Mode :10 vibration modes", "Power supply :USB charging", "Color: Purple"],
    price: "$8.50"
  },
  {
    sku: "G27",
    features: ["Mode :10 vibration modes", "Power supply :USB charging", "Color: Purple/black/rose/pink"],
    price: "$7.60"
  },
  {
    sku: "G28",
    features: ["Mode :10 vibration modes", "Power supply: battery", "Color: Purple"],
    price: "$2.50"
  },
  {
    sku: "G29",
    features: ["Mode :10 vibration modes", "Power supply :USB charging", "Color: Purple/black"],
    price: "$4.50"
  },
  {
    sku: "G30",
    features: ["Mode :10 vibration modes", "Power supply :USB charging", "Color: Purple/black"],
    price: "$4.60"
  },
  {
    sku: "G31",
    features: ["Mode :10 vibration modes", "Power supply :USB charging", "Color: Red/purple/black"],
    price: "$12.80"
  },
  {
    sku: "G32",
    features: ["Mode :10 vibration modes", "Power supply :USB charging", "Color: Black"],
    price: "$9.70"
  },
  {
    sku: "G33",
    features: ["Mode :10 vibration modes", "Power supply :USB charging", "Color: Red/purple/black"],
    price: "$7.60"
  },
  {
    sku: "G34",
    features: ["Mode :10 vibration modes", "Power supply :USB charging", "Color: Red"],
    price: "$4.60"
  },
  {
    sku: "G35",
    features: ["Mode :10 vibration modes", "Power supply :USB charging", "Color: Purple"],
    price: "$4.20"
  },
  {
    sku: "G36",
    features: ["Mode :10 vibration modes", "Power supply :USB charging", "Color: Purple/black"],
    price: "$1.20"
  },
  {
    sku: "G37",
    features: ["Modes: 10 Vibration Modes", "Power: USB Magnetic Charging", "Colors: Wine Red"],
    price: "$22.90"
  },
  {
    sku: "G38",
    features: ["Mode :10 vibration/remote control", "Power supply :USB magnetic charge", "Color: Purple"],
    price: "$5.90"
  },
  {
    sku: "G39",
    features: ["Mode :9 vibration modes", "Power :USB charging", "Color: Red/purple/orange/blue"],
    price: "$9.40"
  },
  {
    sku: "G40",
    features: ["Mode: Vibration/heating", "Power :USB charging", "Color: Red/pink"],
    price: "$9.10"
  },
  {
    sku: "G41",
    features: ["Mode: Vibration/Rear court/sucking", "Power :USB charging", "Color: Purple/pink"],
    price: "$4.50"
  },
  {
    sku: "G42",
    features: ["Mode :8 vibrate/Rear court/Suck", "Power :USB charging", "Color: Purple"],
    price: "$9.60"
  },
  {
    sku: "G43",
    features: ["Remote control version/app version", "Mode :10 frequency vibration /10 frequency expansion", "Power :USB charging", "Color: Red"],
    price: "$11.50"
  },
  {
    sku: "G44",
    features: ["Mode :10 vibration/rear court/G-spot", "Power :USB charging", "Color: Purple/black/red"],
    price: "$7.90"
  },
  {
    sku: "G45",
    features: ["Mode :7 rotation modes", "Power :USB charging", "Color: Black"],
    price: "$15.70"
  },
  {
    sku: "G46",
    features: ["Mode :7 shock /3 suction/heating/sound", "Power :USB charging", "Color: White"],
    price: "$18.60"
  },
  {
    sku: "G47",
    features: ["Mode :10 rotation modes/voice interactions", "Power :USB charging", "Color: White"],
    price: "$14.30"
  },
  {
    sku: "G48",
    features: ["Mode :10 vibration/voice interaction", "Power :USB charging", "Color: White"],
    price: "$10.50"
  },
  {
    sku: "G49",
    features: ["Mode :5 rotation modes", "Power :USB charging", "Color: Black"],
    price: "$12.20"
  },
  {
    sku: "G50",
    features: ["Mode :7 shock /4 absorption /3 languages", "Power :USB charging", "Color: Black"],
    price: "$19.80"
  },
  {
    sku: "G51",
    features: ["Mode: Telescoping/vibration/voice interaction", "Power :USB charging", "Color: Black"],
    price: "$22.90"
  },
  {
    sku: "G52",
    features: ["Mode :9 vibration /9 suction mode", "Power :USB charging", "Color: White"],
    price: "$11.80"
  },
  {
    sku: "G53",
    features: ["Mode: 7vibration/3suction mode", "Power :USB charging", "Color: Black"],
    price: "$23.50"
  },
  {
    sku: "G54",
    features: ["Mode :12 frequency vibration", "Power :USB charging", "Color: Black/green"],
    price: "$8.50"
  },
  {
    sku: "G55",
    features: ["Mode :10 vibrations", "Power :USB charging", "Color: Black/green/white"],
    price: "$16.40"
  },
  {
    sku: "G56",
    features: ["Mode: Manual massage", "Color: Purple/blue/red/green", "Material: Medical silicone"],
    price: "$5.50"
  },
  {
    sku: "G57",
    features: ["Mode: Manual massage", "Color: Black"],
    price: "$5.50"
  },
  {
    sku: "G58",
    features: ["Material: Silicone", "Function: Delay Ejaculation / Penis Extension / Reusable", "Color: Black/white"],
    price: "$1.80"
  },
  {
    sku: "G59",
    features: ["Material: Silicone", "Function: Delay Ejaculation / Penis Extension / Reusable", "Color: Black/white"],
    price: "$0.90"
  },
  {
    sku: "G60",
    features: ["Material: Silicone", "Functions: Contraception/penis extension/repeated use", "Color: Black"],
    price: "$1.65"
  },
  {
    sku: "G61",
    features: ["Material: Silicone", "Functions: Contraception/penis extension/repeated use", "Color: Black"],
    price: "$2.50"
  },
  {
    sku: "G62",
    features: ["Material: Silicone", "Function: Delay Ejaculation / Penis Extension / Reusable", "Color: Black/white"],
    price: "$3.50"
  },
  {
    sku: "G63",
    features: ["Material: Metal", "Promotes cellular growth", "Increases penis length and girth", "Painless natural gains", "Designed to fit all penis sizes"],
    price: "$6.80"
  },
  {
    sku: "G64",
    features: ["Mode: Vibration/delayed ejaculation", "Power :USB charging", "Color: Black"],
    price: "$7.90"
  },
  {
    sku: "G65",
    features: ["Mode :vibratio/ delayed ejaculation", "Power :USB charging", "Color: Black"],
    price: "$6.50"
  },
  {
    sku: "G66",
    features: ["Material: liquid silicone/knitted strap", "Function: Same sex use/dildo", "Material: silicone", "Functions: vibration/heating/remote control/expansion/swing"],
    price: "$6.50"
  },
  {
    sku: "G67",
    features: ["Material: liquid silicone/leather strap", "Function: Same sex use/dildo"],
    price: "$6.50"
  },
  {
    sku: "G68",
    features: ["Material: ABS+ silicone", "Function:vibration/electromagnetic pulse"],
    price: "$9.30"
  },
  {
    sku: "G69",
    features: ["Material: silicone", "Mode :10 vibration/remote control", "Power :USB charging", "Color: Black/red"],
    price: "$8.50"
  },
  {
    sku: "G70",
    features: ["Material: silicone", "Mode :10 vibration/remote control", "Power :USB charging", "Color: Black/red"],
    price: "$4.90"
  },
  {
    sku: "G71",
    features: ["Material: silicone", "Mode :10 vibration/remote control", "Power :USB charging", "Color: Black/red"],
    price: "$7.40"
  },
  {
    sku: "G72",
    features: ["Material: Metal", "Size :L/M/S", "L：$ 1.7", "m: $1.5", "s: $ 1.3"],
    price: "$11.80"
  },
  {
    sku: "G73",
    features: ["Material: silicone", "Mode :10 vibration/remote control", "Power :USB charging", "Color: Black"],
    price: "$9.90"
  },
  {
    sku: "G74",
    features: ["Material: silicone", "Mode :10 vibration/remote control", "Power :USB charging", "Color: Black"],
    price: "$9.90"
  },
  {
    sku: "G75",
    features: ["Material: webbing", "Weight: 500g", "Number of pieces: 13pcs", "Color: Black/pink/Red/Purple"],
    price: "$6.50"
  },
  {
    sku: "G76",
    features: ["Material: fabric", "Weight: 90g", "Number of pieces :1 piece", "Color: Black"],
    price: "$1.40"
  },
  {
    sku: "G77",
    features: ["Material: leather + metal", "Weight: 1.61kg", "Number of pieces :8 pieces", "Color: black and red"],
    price: "$17.80"
  },
  {
    sku: "G78",
    features: ["Material: webbing", "Weight: 200g", "Number of pieces: 2pcs", "Color: Black/Red"],
    price: "$2.90"
  },
  {
    sku: "G79",
    features: ["Material: webbing", "Weight: 500g", "Number of pieces: 7pcs", "Color: Black/pink/Red/Purple"],
    price: "$3.60"
  },
  {
    sku: "G80",
    features: ["Data: leather + metal", "Weight: 20g", "Number of pieces :2 pieces", "Color: Pink/red/purple"],
    price: "$3.20"
  },
  {
    sku: "G81",
    features: ["Material: Leather", "Weight :300g", "Number of pieces :7pieces", "Color: Pink/red/purple"],
    price: "$3.70"
  },
  {
    sku: "G82",
    features: ["Material: plush webbing", "Weight :265g", "Number of pieces :7 pieces", "Color: Pink/red/purple"],
    price: "$2.70"
  },
  {
    sku: "G83",
    features: ["Material: plush leather", "Weight: 470g", "Number of pieces :10 pieces", "Color: Pink/red/purple/black"],
    price: "$5.50"
  }
];

function generateProductHTML(product) {
  let featuresList = "<ul>";
  product.features.forEach(feature => {
    featuresList += `<li>${feature}</li>`;
  });
  featuresList += "</ul>";

  const imageUrl = `https://placekitten.com/200/300`; 

  return `
    <div class="product">
      <h2>SKU: ${product.sku}</h2>
      <img src="${imageUrl}" alt="Product Image" />
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Features:</strong></p>
      ${featuresList}
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("products");
  products.forEach(product => {
    container.innerHTML += generateProductHTML(product);
  });
});