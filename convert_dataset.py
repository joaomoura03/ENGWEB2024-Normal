import json


with open("dataset.json", encoding="utf-8") as f:
    data = json.load(f)
    for contrato in data:
        preco = contrato["precoContratual"]
        if preco == None or preco == "" or preco == " ":
            preco = 0
        elif isinstance(preco, str):
            preco = float(preco.replace(",", "."))

        contrato["precoContratual"] = preco

with open("dataset.json", "w", encoding="utf-8") as f:
    json.dump(data, f, indent=2, ensure_ascii=False)
