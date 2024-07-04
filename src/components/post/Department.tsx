import { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import Checkbox from '@mui/material/Checkbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { departmentsData } from '../../assets/departmentsData';


const DepartmentsList = () => {
    const [departments, setDepartments] = useState(departmentsData);

    const handleToggleDepartment = (index: number) => {
        const updatedDepartments = [...departments];
        updatedDepartments[index].checked = !updatedDepartments[index].checked;
        // Toggle all sub-departments
        updatedDepartments[index].subDepartments.forEach((subDept) => {
            subDept.checked = updatedDepartments[index].checked;
        });

        setDepartments(updatedDepartments);
    };

    const handleToggleSubDepartment = (deptIndex: number, subDeptIndex: number) => {
        console.log("entered", deptIndex, subDeptIndex)
        const updatedDepartments = [...departments];
        updatedDepartments[deptIndex].subDepartments[subDeptIndex].checked = !updatedDepartments[deptIndex].subDepartments[subDeptIndex].checked;
        // Check if all sub-departments are checked
        const allSubDeptsChecked = updatedDepartments[deptIndex].subDepartments.every(subDept => subDept.checked);
        updatedDepartments[deptIndex].checked = allSubDeptsChecked;
        setDepartments(updatedDepartments);
    };

    const handleToggleExpand = (index: number) => {
        const updatedDepartments = [...departments];
        updatedDepartments[index].expand = !updatedDepartments[index].expand;
        setDepartments(updatedDepartments);
    };
   
    const styles = {
        container: {
          width: '300px',
        },
      };
    

    return (
        <List>
            {departments.map((department, index) => (
                <div key={department.id} style={styles.container}>
                    <ListItem>
                        <Checkbox
                            checked={department.checked}
                            onChange={() => handleToggleDepartment(index)}
                        />
                        <ListItemText primary={department.name} />
                        {department.expand ? <ExpandLess onClick={() => handleToggleExpand(index)} /> : <ExpandMore onClick={() => handleToggleExpand(index)} />}
                    </ListItem>
                    <Collapse in={department.expand} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            {department.subDepartments.map((subDept, subIndex) => (
                                <ListItem key={subDept.id}>
                                    <Checkbox
                                        checked={subDept.checked}
                                        onClick={() => handleToggleSubDepartment(index, subIndex)}
                                    />
                                    <ListItemText primary={subDept.name} />
                                </ListItem>
                            ))}
                        </List>
                    </Collapse>
                </div>
            ))}
        </List>
    );
};

export default DepartmentsList;
