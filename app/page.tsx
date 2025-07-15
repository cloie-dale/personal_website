export default function Home() {
  return (
    <div className="preview-container">
      <iframe
        srcDoc={`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio Preview</title>
    <style>
      :root {
        --mauve: #9e7682;
        --plum: #561643;
        --cream: #e0e0ce;
        --teal: #2c514c;
        --dark-purple: #190b28;
        
        --mauve-light: #c8adb5;
        --cream-light: #f5f5f0;
        --teal-light: #3d6b66;
        
        --background: var(--cream-light);
        --card-bg: var(--cream);
        --text-primary: var(--dark-purple);
        --text-secondary: #5a4b5e;
        --border-radius: 8px;
      }
      
      body {
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        line-height: 1.6;
        color: var(--text-primary);
        background-color: var(--background);
        margin: 0;
        padding: 0;
        background-image: 
          radial-gradient(circle at 10% 20%, rgba(44, 81, 76, 0.05) 0%, transparent 20%),
          radial-gradient(circle at 90% 30%, rgba(86, 22, 67, 0.05) 0%, transparent 20%),
          radial-gradient(circle at 30% 70%, rgba(158, 118, 130, 0.05) 0%, transparent 20%),
          radial-gradient(circle at 80% 80%, rgba(224, 224, 206, 0.1) 0%, transparent 20%);
        background-attachment: fixed;
      }
      
      .container {
        width: 90%;
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
      }
      
      header {
        background-color: var(--card-bg);
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        padding: 20px 0;
      }
      
      header .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      
      .logo {
        font-size: 1.8rem;
        font-weight: 700;
        color: var(--teal);
        margin: 0;
      }
      
      .section-divider {
        height: 5px;
        background: var(--teal);
        margin: 0;
        padding: 0;
      }
      
      .section-divider:nth-child(2n) {
        background: var(--plum);
      }
      
      .section-divider:nth-child(3n) {
        background: var(--mauve);
      }
      
      .hero {
        padding: 100px 0;
        background: linear-gradient(135deg, rgba(224, 224, 206, 0.5) 0%, rgba(245, 245, 240, 0.5) 100%);
      }
      
      .hero .container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 50px;
      }
      
      .hero-content h1 {
        font-size: 3rem;
        line-height: 1.2;
        margin-bottom: 20px;
      }
      
      .highlight {
        color: var(--teal);
        font-weight: bold;
      }
      
      .headshot-container {
        position: relative;
        width: 300px;
        height: 300px;
        border-radius: 50%;
        overflow: hidden;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
      }
      
      .headshot-container:before {
        content: "";
        position: absolute;
        inset: -5px;
        background: linear-gradient(135deg, var(--teal) 0%, var(--teal-light) 100%);
        border-radius: 50%;
        z-index: -1;
        animation: rotate 10s linear infinite;
      }
      
      @keyframes rotate {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
      
      .headshot {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
        border: 5px solid var(--card-bg);
      }
      
      .interests {
        padding: 80px 0;
        background: linear-gradient(135deg, rgba(224, 224, 206, 0.5) 0%, rgba(245, 245, 240, 0.5) 100%);
      }
      
      .section-title {
        font-size: 2.5rem;
        margin-bottom: 2rem;
        text-align: center;
        position: relative;
        color: var(--text-primary);
      }
      
      .section-title::after {
        content: "";
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
        width: 80px;
        height: 4px;
        background: var(--teal);
        border-radius: 2px;
      }
      
      .interests-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 30px;
      }
      
      .interest-card {
        background-color: var(--card-bg);
        border-radius: var(--border-radius);
        overflow: hidden;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
      }
      
      .interest-icon {
        height: 120px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 3rem;
        color: white;
        position: relative;
      }
      
      .interest-music .interest-icon {
        background: linear-gradient(135deg, var(--plum) 0%, #3d0f30 100%);
      }
      
      .interest-crochet .interest-icon {
        background: linear-gradient(135deg, var(--teal) 0%, #1e3a36 100%);
      }
      
      .interest-football .interest-icon {
        background: linear-gradient(135deg, var(--mauve) 0%, #7a5a64 100%);
      }
      
      .interest-formula1 .interest-icon {
        background: linear-gradient(135deg, var(--mauve) 0%, var(--plum) 100%);
      }
      
      .interest-content {
        padding: 20px;
      }
      
      .interest-content h3 {
        margin-bottom: 10px;
        font-size: 1.3rem;
      }
    </style>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>
    <header>
        <div class="container">
            <h1 class="logo">Your Name</h1>
        </div>
    </header>

    <section class="hero">
        <div class="container">
            <div class="hero-content">
                <h1>Hello, I'm <span class="highlight">Your Name</span></h1>
                <p>I create innovative solutions through design and development.</p>
            </div>
            <div class="hero-image">
                <div class="headshot-container">
                    <img src="https://via.placeholder.com/300" alt="Your Headshot" class="headshot">
                </div>
            </div>
        </div>
    </section>

    <div class="section-divider"></div>

    <section class="interests">
        <div class="container">
            <h2 class="section-title">Personal Interests</h2>
            <div class="interests-container">
                <div class="interest-card interest-music">
                    <div class="interest-icon">
                        <i class="fas fa-music"></i>
                    </div>
                    <div class="interest-content">
                        <h3>Music</h3>
                        <p>I'm passionate about music and enjoy exploring different genres.</p>
                    </div>
                </div>
                <div class="interest-card interest-crochet">
                    <div class="interest-icon">
                        <i class="fas fa-hand-sparkles"></i>
                    </div>
                    <div class="interest-content">
                        <h3>Crochet</h3>
                        <p>Crochet is my creative outlet where I can craft beautiful pieces.</p>
                    </div>
                </div>
                <div class="interest-card interest-football">
                    <div class="interest-icon">
                        <i class="fas fa-football-ball"></i>
                    </div>
                    <div class="interest-content">
                        <h3>College Football</h3>
                        <p>I'm an avid college football fan and never miss a game day.</p>
                    </div>
                </div>
                <div class="interest-card interest-formula1">
                    <div class="interest-icon">
                        <i class="fas fa-flag-checkered"></i>
                    </div>
                    <div class="interest-content">
                        <h3>Formula 1</h3>
                        <p>The speed and technology of Formula 1 racing fascinates me.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div class="section-divider"></div>
</body>
</html>
        `}
        style={{
          width: "100%",
          height: "600px",
          border: "none",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        }}
      />
      <div className="mt-4 text-center text-sm text-gray-500">
        This is a simplified preview. Download the full code for the complete website with all features.
      </div>
    </div>
  )
}
