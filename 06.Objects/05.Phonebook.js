function phonebook(entries) {
  let phonebook = {};

  entries.forEach((entry) => {
    let [name, ...phone] = entry.split(" ");
    phonebook[name] = phone.join(" ");
  });

  for (let [name, phone] of Object.entries(phonebook)) {
    console.log(`${name} -> ${phone}`);
  }
}

phonebook(["Peter 0888 657 212", "Bob 0899 657 212", "Peter 123123"]);
phonebook(["Maria 123", "Samantha 456", "Nicole 789"]);
