import { Injectable } from '@nestjs/common';
import { exec, execSync } from 'child_process';

interface upProps {
  name: string;
  image: string;
  ports: string[];
  enviroments: string[];
}

interface downProps {
  id: string;
}

interface statusProps {
  id: string;
}

@Injectable()
export class Docker {
  async up(params: upProps) {
    const { enviroments, ports, image, name } = params;

    let command = 'docker run -d ';
    command += `--name ${name}`;
    command += ` ${this.setup_ports(ports)}`;
    command += ` ${this.setup_enviroments(enviroments)}`;
    command += ` ${image}`;

    exec(command, (error, data) => {
      // If error exist save in databases status server
      // if (error)
      //   return {
      //     message: 'Error to execute this command: ' + command,
      //     error,
      //     data,
      //   };
      // return {
      //   message: 'Command make with success!',
      // };
    });

    return {
      message: `Command: "${command}" make with success!`,
    };
  }

  async down(params: downProps) {
    const { id } = params;

    if (!id)
      return {
        error: 'Property "id" is missing',
      };

    const stop_container = 'docker container stop ' + id;
    const remove_container = 'docker container rm ' + id;
    const command = stop_container + ' && ' + remove_container;

    exec(command, (error, data) => {
      // if (error) return
      // return
    });

    return {
      message: `Command: "${command}" execute with success!`,
    };
  }

  async status(params: statusProps) {
    const { id } = params;

    if (!id)
      return {
        message: 'Property "id" is missing',
      };

    const output_format = `'{"id":"{{ .ID }}", "image": "{{ .Image }}", "name":"{{ .Names }}"}'`;
    const command = `docker ps --filter status=running --format ${output_format}`;

    const output = execSync(command);
    const output_toString = output.toString();
    const output_stringArray = output_toString.split('\n');
    const output_jsonArray = output_stringArray
      .filter((value) => value)
      .map((value) => JSON.parse(value));

    const find = output_jsonArray.find((container) =>
      container.id.includes(id),
    );

    if (find === -1)
      return {
        message: 'Container is not runnig',
      };

    return {
      message: `Container is running  `,
    };
  }

  private setup_enviroments(enviroments: string[]): string {
    return enviroments.map((e) => '-e ' + e).join(' ');
  }

  private setup_ports(ports: string[]): string {
    return ports.map((p) => '-p ' + p).join(' ');
  }
}
