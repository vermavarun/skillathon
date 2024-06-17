# skillathon

Docker Commdands:
- docker build -t vermavarun/skillathon-api .
- docker run -p 3100:3100 vermavarun/skillathon-api
- docker run -p 3000:3000 -e REACT_APP_API_URL=http://localhost:3100 vermavarun/skillathon-ui
- build docker-compose build
- docker-compose up
- docker-compose down
- docker images