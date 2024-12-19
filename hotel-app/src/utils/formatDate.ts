export const formatDate = (date: string): string => {
    const options: Intl.DateTimeFormatOptions = {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    };
    
    return new Date(date).toLocaleDateString('en-GB', options);
  };