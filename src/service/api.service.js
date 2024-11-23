export async function call({ uri, method = "GET", body = undefined }) {
    try {
      const response = await fetch(`http://localhost:3333/api/${uri}`, {
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('token'),
        },
        method,
        body: JSON.stringify(body),
      });
  
      
      if (!response.ok) {
        if (response.status === 401) {
          localStorage.removeItem('token');
        }
        const errorResponse = await response.text(); 
        throw new Error(errorResponse || 'An error occurred');
      }
  
    
      if (response.status === 204) {
        return {};
      }
  
      
      const responseBody = await response.text();
      return responseBody ? JSON.parse(responseBody) : {}; 
  
    } catch (error) {
      console.error("API call error:", error);
      throw error;
    }
  }
  