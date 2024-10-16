<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Name - Portfolio</title>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Roboto', sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }
        h1, h2 {
            color: #B509AC;
        }
        .portfolio-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 20px;
            margin-top: 30px;
        }
        .portfolio-item {
            border: 1px solid #e0e0e0;
            border-radius: 5px;
            overflow: hidden;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            transition: transform 0.3s ease;
        }
        .portfolio-item:hover {
            transform: translateY(-5px);
        }
        .portfolio-image {
            width: 100%;
            height: 200px;
            object-fit: cover;
        }
        .portfolio-content {
            padding: 15px;
        }
        .portfolio-title {
            font-size: 1.2em;
            margin: 0 0 10px 0;
        }
        .portfolio-client {
            font-size: 0.9em;
            color: #666;
            margin-bottom: 10px;
        }
        .portfolio-description {
            font-size: 0.95em;
            margin-bottom: 15px;
        }
        .view-project {
            display: inline-block;
            padding: 8px 15px;
            background-color: #B509AC;
            color: white;
            text-decoration: none;
            border-radius: 3px;
            transition: background-color 0.3s ease;
        }
        .view-project:hover {
            background-color: #9c0891;
        }
    </style>
</head>
<body>
    <h1>Your Portfolio</h1>
    <p>Showcase of my copywriting projects</p>

    <div class="portfolio-grid">
        <!-- Portfolio Item 1 -->
        <div class="portfolio-item">
            <img src="project1-image.jpg" alt="Project 1" class="portfolio-image">
            <div class="portfolio-content">
                <h2 class="portfolio-title">Project Title 1</h2>
                <p class="portfolio-client">Client: Company Name</p>
                <p class="portfolio-description">Brief description or tagline for the project goes here.</p>
                <a href="#" class="view-project">View Project</a>
            </div>
        </div>

        <!-- Portfolio Item 2 -->
        <div class="portfolio-item">
            <img src="project2-image.jpg" alt="Project 2" class="portfolio-image">
            <div class="portfolio-content">
                <h2 class="portfolio-title">Project Title 2</h2>
                <p class="portfolio-client">Client: Another Company</p>
                <p class="portfolio-description">Another brief description or tagline for this project.</p>
                <a href="#" class="view-project">View Project</a>
            </div>
        </div>

        <!-- Add more portfolio items as needed -->
    </div>
</body>
</html>