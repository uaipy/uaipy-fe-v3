import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Bell,
  Mail,
  Shield,
  Globe,
  Moon,
  Sun,
  Save,
  Lock,
  Database,
} from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { Switch } from '@/components/ui/switch';

export default function Settings() {
  const { theme, toggleTheme } = useTheme();

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="pb-1 text-3xl font-semibold tracking-tight">
          Configurações
        </h1>
        <p className="text-muted-foreground">
          Gerencie suas preferências do sistema
        </p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Perfil</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Nome</Label>
                <Input
                  id="name"
                  placeholder="Seu nome"
                  defaultValue="Ruan Neres"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Seu email"
                  defaultValue="ruan.neres@uaipy.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Empresa</Label>
              <Input
                id="company"
                placeholder="Nome da empresa"
                defaultValue="Uaipy"
              />
            </div>
            <Button className="w-full sm:w-auto">
              <Save className="mr-2 h-4 w-4" />
              Salvar Alterações
            </Button>
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Notificações</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Bell className="text-muted-foreground h-5 w-5" />
                  <div>
                    <h3 className="font-medium">Notificações por Email</h3>
                    <p className="text-muted-foreground text-sm">
                      Receba atualizações por email
                    </p>
                  </div>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Bell className="text-muted-foreground h-5 w-5" />
                  <div>
                    <h3 className="font-medium">Notificações Push</h3>
                    <p className="text-muted-foreground text-sm">
                      Receba notificações no navegador
                    </p>
                  </div>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Bell className="text-muted-foreground h-5 w-5" />
                  <div>
                    <h3 className="font-medium">Alertas de Sistema</h3>
                    <p className="text-muted-foreground text-sm">
                      Receba alertas de problemas
                    </p>
                  </div>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Segurança</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Lock className="text-muted-foreground h-5 w-5" />
                  <div>
                    <h3 className="font-medium">
                      Autenticação em Dois Fatores
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Adicione uma camada extra de segurança
                    </p>
                  </div>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Shield className="text-muted-foreground h-5 w-5" />
                  <div>
                    <h3 className="font-medium">Login com Biometria</h3>
                    <p className="text-muted-foreground text-sm">
                      Use impressão digital ou reconhecimento facial
                    </p>
                  </div>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Database className="text-muted-foreground h-5 w-5" />
                  <div>
                    <h3 className="font-medium">Backup Automático</h3>
                    <p className="text-muted-foreground text-sm">
                      Faça backup dos seus dados periodicamente
                    </p>
                  </div>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Aparência</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Moon className="text-muted-foreground h-5 w-5" />
                  <div>
                    <h3 className="font-medium">Modo Escuro</h3>
                    <p className="text-muted-foreground text-sm">
                      Ative o tema escuro da interface
                    </p>
                  </div>
                </div>
                <Switch
                  checked={theme === 'dark'}
                  onCheckedChange={toggleTheme}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sun className="text-muted-foreground h-5 w-5" />
                  <div>
                    <h3 className="font-medium">Modo Claro</h3>
                    <p className="text-muted-foreground text-sm">
                      Ative o tema claro da interface
                    </p>
                  </div>
                </div>
                <Switch
                  checked={theme === 'light'}
                  onCheckedChange={toggleTheme}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Idioma e Região</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Globe className="text-muted-foreground h-5 w-5" />
                  <div>
                    <h3 className="font-medium">Idioma do Sistema</h3>
                    <p className="text-muted-foreground text-sm">
                      Altere o idioma da interface
                    </p>
                  </div>
                </div>
                <Button variant="outline">Português</Button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Globe className="text-muted-foreground h-5 w-5" />
                  <div>
                    <h3 className="font-medium">Fuso Horário</h3>
                    <p className="text-muted-foreground text-sm">
                      Configure seu fuso horário local
                    </p>
                  </div>
                </div>
                <Button variant="outline">UTC-3</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Conta</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Mail className="text-muted-foreground h-5 w-5" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-muted-foreground text-sm">
                    Altere seu endereço de email
                  </p>
                </div>
              </div>
              <Button variant="outline">Alterar Email</Button>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Lock className="text-muted-foreground h-5 w-5" />
                <div>
                  <h3 className="font-medium">Senha</h3>
                  <p className="text-muted-foreground text-sm">
                    Altere sua senha de acesso
                  </p>
                </div>
              </div>
              <Button variant="outline">Alterar Senha</Button>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Shield className="text-muted-foreground h-5 w-5" />
                <div>
                  <h3 className="font-medium">Excluir Conta</h3>
                  <p className="text-muted-foreground text-sm">
                    Remova permanentemente sua conta
                  </p>
                </div>
              </div>
              <Button variant="destructive">Excluir Conta</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
