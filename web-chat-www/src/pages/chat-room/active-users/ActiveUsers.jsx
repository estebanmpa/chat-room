import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import UseUsers from '../../../common/hooks/useUsers';
import Format from '../../../common/Format';


const ActiveUsers = () => {
    const { users } = UseUsers();

    if (users.length === 0) {
        return "Loading active users...";
    }

    return (

        <List dense={true}>
            {users.map(u => (
                <ListItem key={u._id}>
                    <ListItemAvatar>
                        <Avatar>
                            <AccountCircleIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary={u.name}
                        secondary={(u.online) ? 'Online' : `Last Seen ${Format.getInstance().timeFromNow(u.last_login)}`}
                    />
                </ListItem>))
            }
        </List>
    )
}

export default ActiveUsers;