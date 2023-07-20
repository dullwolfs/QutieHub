import { userService } from 'services';
import { Link } from 'components';

export default Home;

function Home() {
    return (
        <div className="p-4">
            <div className="container">
                <h1>Hi {userService.userValue?.nickName}!</h1>
                <p>欢迎来到秋蒂社区网站!!</p>

            </div>
        </div>
    );
}
