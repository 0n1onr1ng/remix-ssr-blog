import { Button, Divider, Popover, Space } from 'antd';
import config from '~/config.json';

interface Social {
  [key: string]: {
    link: string;
    icon: string;
  };
}

const Aside: React.FC = (props) => {
  return (
    <aside
      className='border-0 border-r-1 border-solid border-#ebedf0 text-center overflow-y-auto text-rgba(0, 0, 0, 0.65)'
      style={{ height: 'calc(100vh - 64px - 40px)' }}>
      <img src={config.avatar} className='w-132px h-132px rounded-full' />
      <h2 className='mt-10px mb-0 text-1.5em font-bold'>{config.asideName}</h2>
      <h5 className='mt-5px mb-5px text-13px'>{config.motto}</h5>

      <ul className='flex justify-center'>
        {Object.keys((config.social || {}) as Social).map((key, idx) => {
          const item = config.social[key];
          return (
            <li key={idx} className='pl-8px pr-8px  cursor-pointer rounded-4px hover:bg-#eee'>
              <img className='w-16px h-16px mr-5px' src={item.icon} alt={key} title={key} />
              <a target='_blank' rel='noreferrer noopener' className='text-#555' href={item.link}>
                {key}
              </a>
            </li>
          );
        })}
      </ul>

      <Divider />

      <Space>
        {config.donate && (
          <Popover
            arrowPointAtCenter
            autoAdjustOverflow
            placement='right'
            title={config.donateWord || false}
            content={
              <table
                style={{
                  borderCollapse: 'collapse',
                }}>
                <thead>
                  <tr>
                    {Object.keys(config.donate || {}).map((key, idx) => (
                      <th key={idx} className='border-solid border-1px border-light-800 text-center lh-7'>
                        {key}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    {' '}
                    {Object.keys(config.donate || {}).map((key, idx) => (
                      <td key={idx} className='border-solid border-1px border-light-800'>
                        <img src={config.donate[key]} className='w-160px h-160px' />
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            }>
            <Button>打赞</Button>
          </Popover>
        )}

        <Button>其他</Button>
      </Space>

      <div>Powser By Alvin</div>
    </aside>
  );
};

export default Aside;