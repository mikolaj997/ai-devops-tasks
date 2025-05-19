def find_duplicates(list_of_items):
    duplicates = []
    for i in range(len(list_of_items)):
        for j in range(i+1, len(list_of_items)):
            if list_of_items[i] == list_of_items[j] and list_of_items[i] not in duplicates:
                duplicates.append(list_of_items[i])
    return duplicates:

### Czy ten kod można zoptymalizować? Jeśli tak, zaproponuj bardziej wydajną wersję.:

Tak, ten kod można znacząco zoptymalizować!

Twoja funkcja ma złożoność O(n²), bo dla każdego elementu porównuje go z pozostałymi — to jest kosztowne przy dużych listach.

Optymalizacja
Możemy użyć słownika (dict) lub zbioru (set) do szybkiego sprawdzania, które elementy już wystąpiły, a które są duplikatami. Taka wersja będzie miała złożoność O(n).

Przykładowa, bardziej wydajna wersja:
python
Copy
Edit
def find_duplicates(list_of_items):
    seen = set()
    duplicates = set()
    for item in list_of_items:
        if item in seen:
            duplicates.add(item)
        else:
            seen.add(item)
    return list(duplicates)
Jak to działa?
seen przechowuje elementy, które już widzieliśmy.

Gdy trafimy na element, który jest już w seen, oznacza to, że jest duplikatem — dodajemy go do duplicates.

Na końcu zwracamy listę unikalnych duplikatów.

Przykład:
python
Copy
Edit
print(find_duplicates([1, 2, 3, 2, 1, 5]))
# Wynik: [1, 2]
