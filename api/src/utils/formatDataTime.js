const formatDataTime = (data) => {
    const createdAt = new Date(data);
    const formattedDate = `${createdAt.getDate()}-${createdAt.getMonth() + 1}-${createdAt.getFullYear()}`;
    const formattedTime = `${createdAt.getHours()}:${String(createdAt.getMinutes()).padStart(2, '0')}`;
  
    return {
      data: formattedDate,
      time: formattedTime,
    };
  };

  module.exports = formatDataTime