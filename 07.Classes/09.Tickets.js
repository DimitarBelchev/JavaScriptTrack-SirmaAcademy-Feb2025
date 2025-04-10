class Ticket {
  constructor(destination, price, status) {
    this.destination = destination;
    this.price = parseFloat(price);
    this.status = status;
  }
}

function manageTickets(ticketDescriptions, sortingCriterion) {
  const tickets = ticketDescriptions.map((description) => {
    const [destination, price, status] = description.split("|");
    return new Ticket(destination, price, status);
  });

  tickets.sort((a, b) => {
    if (sortingCriterion === "price") {
      return a.price - b.price;
    } else {
      return a[sortingCriterion].localeCompare(b[sortingCriterion]);
    }
  });

  return tickets;
}

const tickets = [
  "Philadelphia|94.20|available",
  "New York City|95.99|available",
  "New York City|95.99|sold",
  "Boston|126.20|departed",
];

console.log(manageTickets(tickets, "destination"));
console.log(manageTickets(tickets, "status"));
