# Lancer les tests

Pour lancer les tests :

```bash
# avec Bun installé localement
bun test
# ou avec Docker
docker run --rm -v $(pwd):/home/bun/app -w /home/bun/app oven/bun:1.0 sh -c "bun test"
```
