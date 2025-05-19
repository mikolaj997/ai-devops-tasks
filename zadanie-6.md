### Stwórz prosty diagram Mermaid pokazujący proces CI/CD: commit → build → test → deploy.

Jasne! Oto prosty diagram Mermaid ilustrujący proces CI/CD:

markdown
Copy
Edit
```mermaid
graph LR
    A[Developer Commit] --> B[Build]
    B --> C[Test]
    C --> D[Deploy]
    D --> E[Production]
```
📌 Co przedstawia:

A – programista wykonuje commit (np. push do Git)

B – pipeline buduje aplikację (np. Jenkins, GitHub Actions)

C – uruchamiane są testy automatyczne (unit/integration)

D – jeśli testy przejdą, kod jest wdrażany

E – aplikacja trafia na produkcję

mermaid:![Zrzut ekranu 2025-05-19 160627](https://github.com/user-attachments/assets/d35cd011-8b3d-4f5b-a2e3-99db6b0dd36b)
