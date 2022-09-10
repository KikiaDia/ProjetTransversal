# Generated by Django 4.0.3 on 2022-07-02 16:06

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_sondage'),
    ]

    operations = [
        migrations.CreateModel(
            name='Parametre',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('contrainte_type_donnees', models.CharField(max_length=100)),
                ('fk_type_question', models.ManyToManyField(to='api.type_question')),
            ],
        ),
        migrations.CreateModel(
            name='Option_reponse',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('intitule_option', models.CharField(max_length=100)),
                ('type_question', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.type_question')),
            ],
        ),
    ]
