export const tryCatchWrapper = async (promise) => {
  try { 
    const response = await promise;

    return { data: response, error: null };
  } catch (error) {
    return { data: null, error };
  }
}