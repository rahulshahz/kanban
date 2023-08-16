import { Dropdown, Navbar,Avatar } from 'flowbite-react';
import { DarkThemeToggle} from 'flowbite-react';

export default function Nav(){
    return (
        <div className='mx-auto sticky top-0 z-20'>
          <Navbar
      fluid
      
    >
      <Navbar.Brand href="#">
        
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          QUICKSELL
        </span>
      </Navbar.Brand>
      
      <div className="flex md:order-2">
      <DarkThemeToggle className='mx-5'/>
        <Dropdown
          inline
          label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-4.jpg" size="sm" rounded/>}
        >
          <Dropdown.Header>
            <span className="block text-sm">
              Bonnie Green
            </span>
            <span className="block truncate text-sm font-medium">
              bonnie@gmail.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>
            Dashboard
          </Dropdown.Item>
          <Dropdown.Item>
            Settings
          </Dropdown.Item>
          <Dropdown.Item>
            Earnings
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>
            Sign out
          </Dropdown.Item>
        </Dropdown>

      </div>
      
    </Navbar>
        </div>
    )
}