  const searchTickets = searchText => {
    setText(searchText);
    const ticketSearchData = technicianTicketList.filter(function (item) {
      const itemData =
        item.first_name.toUpperCase() +
        item.last_name.toUpperCase() +
        item.strBrandName.toUpperCase() +
        item.intTicketID;
      const textData = '' + searchText.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });

    dispatch(searchTicketData(ticketSearchData));
  };