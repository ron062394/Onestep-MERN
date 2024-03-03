import './AdminHeader.css'

function AdminHeader() {
    return (
      <div className="admin-header">
        <span>Dashboard</span>
        <div>
            <button className='admin-btn'>Hi, Jamie</button>
            <button className='admin-btn'>Notifications</button>
        </div>
      </div>
    );
}

export default AdminHeader;
  