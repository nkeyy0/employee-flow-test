import axios from 'axios';
import { useEffect, useState } from 'react';
import { ApiRoutes } from '../common/constants/api-routes.enum';
import { CONFIG } from '../common/constants/config';
import { Employee } from '../common/interfaces/employee.interface';

function useEmployeeList(): [Employee[], boolean, Error?] {
  const [data, setData] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(false);
  const [loadingError, setLoadingError] = useState();
  useEffect(() => {
    async function fetchEmployees() {
      try {
        setLoading(true);
        const url = `${CONFIG.API_URL}${ApiRoutes.Employees}`;
        const result = await axios.get<Employee[]>(url);
        setData(result.data);
      } catch (error) {
        setLoadingError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchEmployees();
  }, []);
  return [data, loading, loadingError];
}

export default useEmployeeList;
